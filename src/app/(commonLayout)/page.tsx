import React from "react";
import PostCard from "@/src/components/ui/PostCard";
import Filter from "@/src/components/module/articles/Filter";
import Sidebar from "@/src/components/module/articles/Sidebar";

const page = async ({ searchParams }: any) => {
  const params = new URLSearchParams(searchParams);
  const query = new URLSearchParams({
    sort: params.get("sort") || "",
    searchTerm: params.get("searchTerm") || "",
    category: params.get("category") || "",
    tag: params.get("tag") || "",
  }).toString();

  const res = await fetch(
    `https://ultimate-tripz.vercel.app/api/post/all-posts?${query}`
  );
  const data = await res.json();

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
