import { Button } from "@nextui-org/button";
import Image from "next/image";
import b1Img from "@/src/assets/banner/b1.webp";
import b3Img from "@/src/assets/banner/b3.webp";

const Banner = () => {
  return (
    <div className="flex gap-x-10 py-10 items-center">
      <div className="w-[50%] space-y-5">
        <h1 className="text-5xl font-bold">
          Travel the world like never before and get better taste
        </h1>
        <h2 className="text-xl font-semibold">
          Discover hidden gems, unforgettable experiences, and insider tips from
          around the globe.
        </h2>
        <Button radius="sm">Explore Articles</Button>
        <h3 className="font-medium">
          Connect with active travelers and gain real-time tips, advice, and
          insights from a global community.
        </h3>
      </div>
      <div className="w-[50%]">
        <div className="">
          <div className="flex justify-end">
            <Image
              src={b1Img}
              alt="banner"
              height={300}
              width={300}
              className="rounded-2xl"
            />
          </div>
          <div className="">
            <Image
              src={b3Img}
              alt="banner"
              height={300}
              width={300}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
