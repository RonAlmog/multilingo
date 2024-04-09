import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

const QuizHeader = ({ hearts, percentage, hasActiveSubscription }: Props) => {
  return (
    <header className="flex items-center justify-between w-full mx-auto gap-x-7 max-w-[1140px] lg:pt-[50px] pt-[20px] px-10">
      <X
        onClick={() => {}}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src="/heart.svg"
          height={28}
          width={28}
          alt="Heart"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};

export default QuizHeader;
