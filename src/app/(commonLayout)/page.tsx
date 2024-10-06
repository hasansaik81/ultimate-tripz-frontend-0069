import React from "react";
import Filter from "@/src/components/module/articles/Filter";
import Sidebar from "@/src/components/module/articles/Sidebar";
import CreatePost from "@/src/components/module/articles/create-post/CreatePost";
import Blogs from "./_components/Blogs";

const page = ({ searchParams }: any) => {
  const params = new URLSearchParams(searchParams);

  const queryParams = {
    sort: params.get("sort") || "",
    searchTerm: params.get("searchTerm") || "",
    category: params.get("category") || "",
    tag: params.get("tag") || "",
  };

  return (
    <div className="flex lg:flex-row flex-col gap-10">
      <div className="lg:w-[60%]">
        <CreatePost />
        <Filter />
        <Blogs queryParams={queryParams} />
      </div>
      <div className="lg:w-[40%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
