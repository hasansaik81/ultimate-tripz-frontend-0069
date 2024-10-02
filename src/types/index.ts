import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TPost {
  _id: string;
  title: string;
  content: string;
  images: string[];
  tags: string;
  upVotes: any[];
  downVotes: any[];
  commentsCount: number;
  author: null;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface TPopularPost {
  _id: string;
  title: string;
  content: string;
  tags: string;
  upVotes: string[];
  author: TPostAuthor;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TPostAuthor {
  _id: string;
  name: string;
  avatar: string;
}
