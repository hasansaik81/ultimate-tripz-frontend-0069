"use client";

import PostCard from "@/src/components/ui/PostCard";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetAllPostsQuery } from "@/src/redux/features/post";
import { useAppSelector } from "@/src/redux/hooks";
import { TPostDetails } from "@/src/types";

const Blogs = ({ queryParams }: any) => {
  const { data } = useGetAllPostsQuery(queryParams);
  const user = useAppSelector(useCurrentUser) as TUser;
  const isBasic = user?.status === "basic";
  // Filter posts based on user status
  const filteredPosts = data?.data.filter((post: TPostDetails) => {
    return isBasic || !user ? post.tags.includes("regular") : true;
  });
  return (
    <div>
      <PostCard data={filteredPosts} />
    </div>
  );
};

export default Blogs;
