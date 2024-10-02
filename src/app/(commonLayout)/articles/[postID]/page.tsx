"use client";
import DownVote from "@/src/components/module/articles/DownVote";
import UpVote from "@/src/components/module/articles/UpVote";
import { useGetPostDetailsQuery } from "@/src/redux/features/post";
import { TPostDetails } from "@/src/types";
import Image from "next/image";

interface TProps {
  params: {
    postID: string;
  };
}
const PostDetails = ({ params }: TProps) => {
  const id = params.postID;
  const { data, isLoading } = useGetPostDetailsQuery(id);
  const postInfo = data?.data as TPostDetails;
  console.log(data?.data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Post ID: {id}</p>
      <div className="flex gap-x-10">
        <div>
          <h2 className="text-2xl font-bold">{postInfo?.title}</h2>
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
        <div className="flex items-center">
          <UpVote votes={postInfo.upVotes} id={postInfo._id} />{" "}
          <DownVote votes={postInfo.downVotes} id={postInfo._id} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
