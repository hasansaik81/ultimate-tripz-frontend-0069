import React from "react";
import PostCard from "@/src/components/ui/PostCard";
import Filter from "@/src/components/module/articles/Filter";

const page = async ({ searchParams }) => {
  const res = await fetch("http://localhost:5000/api/post/all-posts");
  const data = await res.json();

  const params = new URLSearchParams(searchParams);

  console.log("searchParams:", params.get("searchTerm"));
  return (
    <div>
      <Filter />
      <PostCard data={data.data} />
    </div>
  );
};

export default page;
