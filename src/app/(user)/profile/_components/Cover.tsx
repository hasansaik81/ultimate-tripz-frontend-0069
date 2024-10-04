"use client";

import Image from "next/image";
import EditProfile from "./EditProfile";
import { TUserDetails } from "@/src/types";
type TProps = {
  userDetails: TUserDetails;
};

const Cover = ({ userDetails }: TProps) => {
  return (
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
  );
};

export default Cover;
