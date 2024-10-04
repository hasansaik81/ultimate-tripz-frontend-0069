"use client";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import Image from "next/image";

const CreatePost = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  return (
    <div className="pt-5">
      <p className="text-lg font-medium mb-5">Have anything on mind?</p>
      <div className="flex items-center gap-5">
        <Image
          src={user?.avatar || "/anonymous-user.png"}
          height={100}
          width={100}
          alt={"user"}
          className="size-[60px] rounded-full border object-cover"
        />
        <input
          type="text"
          className="rounded-full w-full h-[60px] border px-5"
          placeholder="Share your thoughts...!"
        />
      </div>
    </div>
  );
};

export default CreatePost;
