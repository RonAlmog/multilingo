import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import Quiz from "./quiz";

type Props = {};

const LearnPage = async (props: Props) => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);
  if (!lesson || !userProgress) {
    redirect("/learn");
  }
  const initialPercentage =
    (lesson.challenges.filter((ch) => ch.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={null}
    />
  );
};

export default LearnPage;