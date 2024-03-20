import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";

type Props = {};

const LearnPage = (props: Props) => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 border-2">
      <StickyWrapper>my sticky sidebar</StickyWrapper>
      <FeedWrapper>feed here</FeedWrapper>
    </div>
  );
};

export default LearnPage;
