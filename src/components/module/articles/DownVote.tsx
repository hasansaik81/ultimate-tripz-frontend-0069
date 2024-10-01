import { TPost } from "@/src/types";
import { FaAnglesDown } from "react-icons/fa6";
import { TUpVote } from "./UpVote";

const DownVote = ({ data }: TUpVote) => {
  return (
    <button className="flex items-center gap-2 border-r w-full p-2 justify-center">
      <FaAnglesDown /> {data?.downVotes?.length}
    </button>
  );
};

export default DownVote;
