"use client";
import { useGetPopularPostsQuery } from "@/src/redux/features/post";
import { TPopularPost } from "@/src/types";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaAnglesUp } from "react-icons/fa6";
import { LiaUserEditSolid } from "react-icons/lia";

const Sidebar = () => {
  const { data, isLoading } = useGetPopularPostsQuery("");
  return (
    <div className="sticky top-[100px] ">
      <div className="">
        <div className="space-y-2 border rounded-xl p-4">
          <p className="text-2xl font-bold">Subscribe to Premium</p>
          <p className="font-medium">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <Button>Subscribe</Button>
        </div>
        <div className="border p-4 rounded-xl mt-4">
          <p className="text-xl font-bold mb-4">Popular Posts:</p>
          <div className="space-y-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data.data.map((item: TPopularPost) => {
                return (
                  <div key={item._id}>
                    <Link
                      href={`/articles/${item._id}`}
                      className="font-semibold"
                    >
                      {item.title}
                    </Link>
                    <p>{item.content.slice(0, 40)}...</p>
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-2">
                        <FaAnglesUp /> {item.upVotes.length}
                      </p>
                      <Link
                        href={`/user/${item.author._id}`}
                        className="flex items-center gap-2"
                      >
                        <LiaUserEditSolid className="text-xl" />{" "}
                        {item.author.name}
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
