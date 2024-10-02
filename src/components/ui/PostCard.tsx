import { TPost } from "@/src/types";
import Image from "next/image";
import { FaRegCommentAlt } from "react-icons/fa";
import UpVote from "../module/articles/UpVote";
import DownVote from "../module/articles/DownVote";

type TPostCard = {
  data: TPost[];
};

const PostCard = ({ data }: TPostCard) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        {data.map((item: TPost) => {
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
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.content.slice(0, 90)}...</p>
              </div>
              <div className="flex items-center justify-between border-t">
                <UpVote data={item} />
                <DownVote data={item} />
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
