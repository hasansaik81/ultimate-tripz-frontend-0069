"use client";
import { useGetUserInfoQuery } from "@/src/redux/features/user";

type TProps = {
  params: any;
};

const DaynamicProfile = ({ params }: TProps) => {
  console.log(params);
  const { data } = useGetUserInfoQuery("");
  console.log(data);
  return (
    <div>
      <p>Hello, DaynamicProfile! {params.userInfo}</p>
    </div>
  );
};

export default DaynamicProfile;
