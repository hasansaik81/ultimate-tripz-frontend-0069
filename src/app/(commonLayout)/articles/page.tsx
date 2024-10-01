import { TPost } from "@/src/types";
import Image from "next/image";
import { FaAnglesUp, FaAngleDown, FaAnglesDown } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import PostCard from "@/src/components/ui/PostCard";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/post/all-posts");
  const data = await res.json();
  return (
    <div>
      <PostCard data={data.data} />
    </div>
  );
};

export default page;
