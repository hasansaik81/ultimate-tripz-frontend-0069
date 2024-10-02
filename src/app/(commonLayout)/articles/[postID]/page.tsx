"use client";
import DownVote from "@/src/components/module/articles/DownVote";
import UpVote from "@/src/components/module/articles/UpVote";
import { useGetCommentsByPostIdQuery } from "@/src/redux/features/comment";
import { useGetPostDetailsQuery } from "@/src/redux/features/post";
import { TComment, TPostDetails } from "@/src/types";
import { formatDateTime } from "@/src/utils/date";
import Image from "next/image";
import Link from "next/link";
import { FaRegCommentAlt } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosTimer } from "react-icons/io";

interface TProps {
  params: {
    postID: string;
  };
}
const PostDetails = ({ params }: TProps) => {
  const id = params.postID;
  const { data, isLoading } = useGetPostDetailsQuery(id);
  const postInfo = data?.data as TPostDetails;
  const { data: allComments } = useGetCommentsByPostIdQuery(id);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="py-10">
      <div className="flex gap-x-10">
        <div>
          <h2 className="text-2xl font-bold">{postInfo?.title}</h2>
          <div className="flex items-center gap-5">
            <p className="flex items-center gap-x-2">
              <LiaUserEditSolid /> {postInfo.author.name}
            </p>
            <p className="flex items-center gap-x-2">
              <IoIosTimer /> {formatDateTime(postInfo.createdAt)}
            </p>
          </div>
          <p className="my-5">{postInfo?.content}</p>
        </div>
        <div>
          <Image
            src={postInfo?.images[0]}
            height={600}
            width={600}
            alt={postInfo?.title}
          />
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-x-5">
          <UpVote votes={postInfo.upVotes} id={postInfo._id} />{" "}
          <DownVote votes={postInfo.downVotes} id={postInfo._id} />
          <p className="flex items-center gap-2 p-2">
            <FaRegCommentAlt /> {postInfo.commentsCount}
          </p>
        </div>
        <div className="lg:w-[50%] mt-5 bg-slate-900">
          {allComments?.data?.map((item: TComment) => {
            return (
              <div key={item?._id} className="border rounded-xl p-5">
                <div className="flex items-center gap-5 mb-4">
                  <Image
                    src={item.userId.avatar}
                    height={80}
                    width={80}
                    alt={item.userId.name}
                    className="rounded-full size-[40px] object-cover"
                  />
                  <div>
                    <Link href={item.userId._id} className="font-bold">
                      {item?.userId.name}
                    </Link>
                    <p>{formatDateTime(item.createdAt)}</p>
                  </div>
                </div>
                <p>{item?.feedback}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
