"use client";
import Follow from "@/src/components/actions/Follow";
import CustomModal from "@/src/components/ui/CustomModal";
import PostCard from "@/src/components/ui/PostCard";
import { useGetPostByAuthorQuery } from "@/src/redux/features/post";
import { useGetUserInfoByIdQuery } from "@/src/redux/features/user";
import { TFollowUser } from "@/src/types";
import { formatDateTime } from "@/src/utils/date";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

type TProps = {
  params: any;
};

const DynamicProfile = ({ params }: TProps) => {
  const userId = params?.userInfo;
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const { data: userPosts } = useGetPostByAuthorQuery(userId);
  const userAllPosts = userPosts?.data;
  const { data } = useGetUserInfoByIdQuery(userId);
  const userDetails = data?.data;
  const author = {
    _id: userDetails?._id,
    name: userDetails?.name,
    email: userDetails?.email,
    avatar: userDetails?.avatar,
    followers: userDetails?.followers,
  };
  return (
    <>
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
          <PostCard data={userAllPosts} />
        </div>
      </div>
      <CustomModal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        actionButtonTitle="Delete"
        footer={false}
        title="Following"
      >
        <div className="space-y-4 mb-4">
          {userDetails?.following?.map((item: TFollowUser) => {
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
                <Follow author={author} />
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
        <div className="space-y-4">
          {userDetails?.followers?.map((item: TFollowUser) => {
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
                <Follow author={author} />
              </div>
            );
          })}
        </div>
      </CustomModal>
    </>
  );
};

export default DynamicProfile;
