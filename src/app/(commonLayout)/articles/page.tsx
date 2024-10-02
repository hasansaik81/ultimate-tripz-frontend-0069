import React from "react";
import PostCard from "@/src/components/ui/PostCard";
import Filter from "@/src/components/module/articles/Filter";
import Sidebar from "@/src/components/module/articles/Sidebar";

const page = async ({ searchParams }) => {
  const res = await fetch("http://localhost:5000/api/post/all-posts");
  const data = await res.json();

  const params = new URLSearchParams(searchParams);

  console.log("searchParams:", params.get("searchTerm"));
  return (
    <div className="flex gap-10">
      <div className="w-[70%]">
        <Filter />
        <PostCard data={data.data} />
      </div>
      <div className="w-[30%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
