"use client";
import { useGetUserInfoQuery } from "@/src/redux/features/user";
import Cover from "./Cover";
import { TUserDetails } from "@/src/types";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import PostCard from "@/src/components/ui/PostCard";
import { formatDateTime } from "@/src/utils/date";
import { useState } from "react";
import { useGetPostByAuthorQuery } from "@/src/redux/features/post";
import FollowingModal from "./FollowingModal";
import FollowerModal from "./FollowerModal";

const UserData = () => {
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const { data } = useGetUserInfoQuery("");
  const userDetails = data?.data as TUserDetails;
  const { data: userPosts } = useGetPostByAuthorQuery(userDetails?._id);
  const userAllPosts = userPosts?.data;
  return (
    <div>
      <Cover userDetails={userDetails} />
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
          <PostCard data={userAllPosts} editingSystem={true} />
        </div>
      </div>
      <FollowingModal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        following={userDetails?.following || []}
      />

      <FollowerModal
        isOpen={isFollowerModalOpen}
        onClose={() => setIsFollowerModalOpen(false)}
        followers={userDetails?.followers || []}
      />
    </div>
  );
};

export default UserData;
