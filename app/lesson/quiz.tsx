"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import QuizHeader from "./quiz-header";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any;
};

const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(50 || initialHearts);
  const [percentage, setPercentage] = useState(50 || initialPercentage);
  return (
    <>
      <QuizHeader hearts={hearts} percentage={percentage} />
    </>
  );
};

export default Quiz;
