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
import { useGetPostByAuthorQuery } from "@/src/redux/features/post";
import PostCard from "@/src/components/ui/PostCard";
import { useState } from "react";
import CustomModal from "@/src/components/ui/CustomModal";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import EditProfile from "./_components/EditProfile";

const page = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const id = user?.id;
  const { data } = useGetUserInfoQuery("");
  const userDetails = data?.data as TUserDetails;
  const { data: userPosts } = useGetPostByAuthorQuery(userDetails?._id);
  const userAllPosts = userPosts?.data;
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  console.log(userDetails);
  return (
    <>
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
        <EditProfile userData={userDetails} />
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
          <button onClick={() => setIsFollowingModalOpen(true)}>
            {userDetails?.following.length} Following
          </button>
          <button onClick={() => setIsFollowerModalOpen(true)}>
            {userDetails?.followers.length} Followers
          </button>
        </div>
        <hr />
        <div>
          <p className="text-xl font-bold mb-5">All posts</p>
          <PostCard data={userAllPosts} profile={true} />
        </div>
      </div>
      <CustomModal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        actionButtonTitle="Delete"
        footer={false}
        title="Following"
      >
        <div className="">
          {userDetails?.following?.map((item) => {
            return (
              <div
                key={item?._id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt="cover"
                    height={60}
                    width={60}
                    className="size-[60px] object-cover rounded-full"
                  />
                  <Link href={`/profile/${item._id}`}> {item?.name}</Link>
                </div>
                <Button>Unfollow</Button>
              </div>
            );
          })}
        </div>
      </CustomModal>
      <CustomModal
        isOpen={isFollowerModalOpen}
        onClose={() => setIsFollowerModalOpen(false)}
        actionButtonTitle="Delete"
        footer={false}
        title="Followers"
      >
        <div className="">
          {userDetails?.followers?.map((item) => {
            return (
              <div
                key={item?._id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt="cover"
                    height={60}
                    width={60}
                    className="size-[60px] object-cover rounded-full"
                  />
                  <Link href={`/profile/${item._id}`}> {item?.name}</Link>
                </div>
                <Button>Follow back</Button>
              </div>
            );
          })}
        </div>
      </CustomModal>
    </>
  );
};

export default page;
