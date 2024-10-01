import React from "react";
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
