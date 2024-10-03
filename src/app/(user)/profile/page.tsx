/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
"use client";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetUserInfoQuery } from "@/src/redux/features/user";
import { useAppSelector } from "@/src/redux/hooks";
import { TUserDetails } from "@/src/types";
import Image from "next/image";

const page = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const id = user?.id;
  const { data } = useGetUserInfoQuery("");
  const userDetails = data?.data as TUserDetails;
  console.log(data);
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
      </div>
      <div></div>
    </div>
  );
};

export default page;
