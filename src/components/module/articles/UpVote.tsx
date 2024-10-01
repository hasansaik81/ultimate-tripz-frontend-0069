import { TPost } from "@/src/types";
import { FaAnglesUp } from "react-icons/fa6";
export type TUpVote = {
  data: TPost;
};
const UpVote = ({ data }: TUpVote) => {
  return (
    <button className="flex items-center gap-2 border-r w-full p-2 justify-center">
      <FaAnglesUp /> {data?.upVotes?.length}
    </button>
  );
};

export default UpVote;
