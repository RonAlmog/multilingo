import { challenges } from "@/db/schema";

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status: "correct" | "wrong" | "none";
  type: (typeof challenges.$inferSelect)["type"];
};

const ChallengeCard = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  status,
  type,
}: Props) => {
  return <div>ChallengeCard</div>;
};

export default ChallengeCard;
