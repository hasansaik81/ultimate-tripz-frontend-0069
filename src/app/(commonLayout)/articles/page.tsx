import { TPost } from "@/src/types";
import Image from "next/image";
import { FaAnglesUp, FaAngleDown, FaAnglesDown } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/post/all-posts");
  const data = await res.json();
  console.log("data", data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {data.data.map((item: TPost) => {
          return (
            <div key={item._id} className="border rounded-2xl">
              <Image
                src={item.images[0]}
                alt="banner"
                height={300}
                width={400}
                className="rounded-2xl object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.content.slice(0, 90)}...</p>
              </div>
              <div className="flex items-center justify-between border-t">
                <button className="flex items-center gap-2 border-r w-full p-2 justify-center">
                  <FaAnglesUp /> {item?.upVotes?.length}
                </button>
                <button className="flex items-center gap-2 border-r w-full p-2 justify-center">
                  <FaAnglesDown /> {item?.downVotes?.length}
                </button>
                <p className="flex items-center gap-2 w-full p-2 justify-center">
                  <FaRegCommentAlt /> {item.commentsCount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
