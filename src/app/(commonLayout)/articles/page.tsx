"use client";
import React from "react";
import PostCard from "@/src/components/ui/PostCard";
import Filter from "@/src/components/module/articles/Filter";
import Sidebar from "@/src/components/module/articles/Sidebar";
import { useGetAllPostsQuery } from "@/src/redux/features/post";

const page = ({ searchParams }: any) => {
  const params = new URLSearchParams(searchParams);

  const queryParams = {
    sort: params.get("sort") || "",
    searchTerm: params.get("searchTerm") || "",
    category: params.get("category") || "",
    tag: params.get("tag") || "",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetAllPostsQuery(queryParams);

  return (
    <div className="flex gap-10">
      <div className="w-[70%]">
        <Filter />
        <PostCard data={data?.data} />
      </div>
      <div className="w-[30%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
