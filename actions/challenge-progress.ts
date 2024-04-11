"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { challengeProgress, challenges, userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { addAbortListener } from "events";

// this is called when user answer is correct
export const upsertChallengeProgress = async (challengeId: number) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const currentUserProgress = await getUserProgress();
  // todo: handle subscription query
  if (!currentUserProgress) {
    throw new Error("User progress not found!");
  }
  const challeng = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });
  if (!challeng) {
    throw new Error("challeng not found!");
  }

  const lessonId = challeng.lessonId;
  const exisingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId)
    ),
  });

  // if exists, user is practicing
  const isPractice = !!exisingChallengeProgress;

  // todo: not if user has subscription
  if (currentUserProgress.hearts === 0 && !isPractice) {
    return { error: "hearts" };
  }

  if (isPractice) {
    await db
      .update(challengeProgress)
      .set({
        completed: true,
      })
      .where(eq(challengeProgress.id, exisingChallengeProgress.id));

    // in practice mode, we also have to increment users hearts.
    // also increment user's points by 10
    await db
      .update(userProgress)
      .set({
        hearts: Math.min(currentUserProgress.hearts + 1, 5), // cant be more than 5
        points: currentUserProgress.points + 10,
      })
      .where(eq(userProgress.userId, userId));

    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);

    return; // not returning anything here
  }

  // if real, not practice mode, time to insert
  await db.insert(challengeProgress).values({
    challengeId,
    userId,
    completed: true,
  });

  await db
    .update(userProgress)
    .set({
      points: currentUserProgress.points + 10,
    })
    .where(eq(userProgress.userId, userId));

  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
};
