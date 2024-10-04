"use client";

import PostCard from "@/src/components/ui/PostCard";
import { useGetAllPostsQuery } from "@/src/redux/features/post";

const Blogs = ({ queryParams }: any) => {
  const { data } = useGetAllPostsQuery(queryParams);
  return (
    <div>
      <PostCard data={data?.data} />
    </div>
  );
};

export default Blogs;
