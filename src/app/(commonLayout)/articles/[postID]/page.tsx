"use client";
import DownVote from "@/src/components/module/articles/DownVote";
import UpVote from "@/src/components/module/articles/UpVote";
import {
  useDeleteCommentMutation,
  useGetCommentsByPostIdQuery,
  usePostCommentMutation,
  useUpdateCommentMutation,
} from "@/src/redux/features/comment";
import { useGetPostDetailsQuery } from "@/src/redux/features/post";
import { TComment, TPostDetails } from "@/src/types";
import { formatDateTime } from "@/src/utils/date";
import Image from "next/image";
import Link from "next/link";
import { FaRegCommentAlt } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosTimer } from "react-icons/io";
import { Form, Formik } from "formik";
import Textarea from "@/src/components/formik/Textarea";
import { Button } from "@nextui-org/button";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import CustomModal from "@/src/components/ui/CustomModal";
import PDFBlogDetails from "../_components/PDFBlogDetails";

type TPostComment = {
  feedback: string;
};
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
  const [createComment] = usePostCommentMutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [commentId, setCommentId] = useState<string>("");
  const [selectedComment, setSelectComment] = useState<TComment | null>(null);
  const [deleteComment] = useDeleteCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const user = useAppSelector(useCurrentUser) as TUser;

  const onSubmit = async (values: TPostComment) => {
    const commentData = {
      postId: postInfo._id,
      userId: user.id,
      ...values,
    };
    try {
      const res = await createComment({
        id: postInfo._id,
        commentInfo: commentData,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateComment = async (values: TPostComment) => {
    if (!selectedComment) {
      return;
    }
    const commentData = {
      postId: postInfo._id,
      userId: user.id,
      ...values,
    };
    try {
      const res = await updateComment({
        id: selectedComment._id,
        commentInfo: commentData,
      }).unwrap();
      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error);
      setIsEditModalOpen(false);
    }
  };
  const handleCommentDelete = async (id: string) => {
    try {
      const res = await deleteComment(id).unwrap();
      setIsDeleteModalOpen(false);
    } catch (error) {
      setIsDeleteModalOpen(false);
      console.log(error);
    }
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="py-10">
      {/* pdf div */}
      <PDFBlogDetails postInfo={postInfo} />
      <div className="">
        <div className="lg:w-[50%] mt-5">
          <div className="lg:w-1/2 flex items-center gap-x-5">
            <UpVote votes={postInfo.upVotes} id={postInfo._id} />{" "}
            <DownVote votes={postInfo.downVotes} id={postInfo._id} />
            <p className="flex items-center w-full justify-center gap-2 p-2">
              <FaRegCommentAlt /> {postInfo.commentsCount}
            </p>
          </div>
          <div className="py-10">
            <Formik initialValues={{ feedback: "" }} onSubmit={onSubmit}>
              <Form className="space-y-5">
                <p className="text-xl font-bold">Share your opinion</p>
                <Textarea name="feedback" />
                <div className="flex justify-end">
                  <Button type="submit">Post</Button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="space-y-5">
            {allComments?.data?.map((item: TComment) => {
              return (
                <div
                  key={item?._id}
                  className="border rounded-xl p-5 dark:bg-slate-900 bg-white"
                >
                  <div className="flex justify-between items-start">
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
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => {
                          setSelectComment(item);
                          setIsEditModalOpen(true);
                        }}
                        isIconOnly
                        className=""
                      >
                        <FiEdit3 className="text-lg" />
                      </Button>
                      <Button
                        isIconOnly
                        onClick={() => {
                          setCommentId(item._id);
                          setIsDeleteModalOpen(true);
                        }}
                        className=""
                      >
                        <MdDeleteOutline className="text-lg" />
                      </Button>
                    </div>
                  </div>
                  <p>{item?.feedback}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onAction={() => handleCommentDelete(commentId)}
        actionButtonTitle="Delete"
      >
        <p className="text-xl font-bold">Are you sure?</p>
        <p className="font-semibold">You want to delete it!</p>
      </CustomModal>
      <CustomModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        footer={false}
      >
        <Formik
          initialValues={{
            feedback: selectedComment ? selectedComment.feedback : "",
          }}
          onSubmit={handleUpdateComment}
        >
          <Form className="space-y-5 pt-10 pb-5">
            <Textarea name="feedback" />
            <div className="flex justify-end">
              <Button type="submit">Update</Button>
            </div>
          </Form>
        </Formik>
      </CustomModal>
    </div>
  );
};

export default PostDetails;
