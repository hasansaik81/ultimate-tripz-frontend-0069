/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
"use client";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetUserInfoQuery } from "@/src/redux/features/user";
import { useAppSelector } from "@/src/redux/hooks";
import { TUserDetails } from "@/src/types";
import { formatDateTime } from "@/src/utils/date";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useGetPostByAuthorQuery } from "@/src/redux/features/post";
import PostCard from "@/src/components/ui/PostCard";

const page = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const id = user?.id;
  const { data } = useGetUserInfoQuery("");
  const userDetails = data?.data as TUserDetails;
  const { data: userPosts } = useGetPostByAuthorQuery(userDetails?._id);
  const userAllPosts = userPosts?.data;
  console.log(userAllPosts);
  return (
    <div>
      {/* cover */}
      <div className="relative">
        <Image
          src={"/bg/bg-3.jpg"}
          alt="cover"
          height={500}
          width={1000}
          className="w-full h-[400px] object-cover"
        />
        <Image
          src={userDetails?.avatar}
          alt="profile"
          height={300}
          width={300}
          className="object-cover rounded-full size-[250px] border-2 absolute -bottom-[125px] left-10"
        />
        <button className="absolute right-5 bottom-3 flex items-center gap-2 font-semibold">
          <FaRegEdit />
          Edit profile
        </button>
      </div>
      <div className="mt-[125px] px-10 py-5 space-y-5">
        <div className="flex items-center gap-5">
          <p className="text-2xl font-bold">{userDetails?.name}</p>
          <button className="flex items-center gap-2 border rounded-xl px-3">
            <RiVerifiedBadgeFill />
            Get verified
          </button>
        </div>
        <p>{userDetails?.address}</p>
        <p>Joined {formatDateTime(userDetails?.createdAt)}</p>
        <div className="flex items-center gap-5">
          <button>{userDetails?.following.length} Following</button>
          <button>{userDetails?.followers.length} Followers</button>
        </div>
        <hr />
        <div>
          <p className="text-xl font-bold mb-5">All posts</p>
          <PostCard data={userAllPosts} />
        </div>
      </div>
    </div>
  );
};

export default page;
