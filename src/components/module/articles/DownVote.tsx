import { FaAnglesDown } from "react-icons/fa6";
import { TVoteProps } from "./UpVote";

const DownVote = ({ votes, id }: TVoteProps) => {
  return (
    <button className="flex items-center gap-2 p-2">
      <FaAnglesDown /> {votes.length}
    </button>
  );
};

export default DownVote;
