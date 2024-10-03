import { TPost } from "@/src/types";
import Image from "next/image";
import { FaRegCommentAlt } from "react-icons/fa";
import UpVote from "../module/articles/UpVote";
import DownVote from "../module/articles/DownVote";
import Link from "next/link";

type TPostCard = {
  data: TPost[];
};

const PostCard = ({ data }: TPostCard) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        {data?.map((item: TPost) => {
          return (
            <div key={item._id} className="border rounded-2xl">
              <Image
                src={item.images[0]}
                alt="banner"
                height={300}
                width={400}
                className="rounded-2xl object-cover w-full"
              />
              <div className="p-4">
                <Link
                  href={`/articles/${item._id}`}
                  className="text-lg font-semibold"
                >
                  {item.title}
                </Link>
                <p>{item.content.slice(0, 90)}...</p>
              </div>
              <div className="flex items-center justify-between border-t">
                <div className="border-r w-full flex justify-center">
                  <UpVote votes={item.upVotes} id={item._id} />
                </div>
                <div className="border-r w-full flex justify-center">
                  <DownVote votes={item.downVotes} id={item._id} />
                </div>
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

export default PostCard;
