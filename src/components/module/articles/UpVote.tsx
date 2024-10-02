import { FaAnglesUp } from "react-icons/fa6";
export type TVoteProps = {
  votes: string[];
  id: string;
};
const UpVote = ({ votes, id }: TVoteProps) => {
  return (
    <button className="flex items-center gap-2 p-2">
      <FaAnglesUp /> {votes.length}
    </button>
  );
};

export default UpVote;
