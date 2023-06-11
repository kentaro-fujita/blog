import React, { FC, Fragment } from "react";
import PostCard, { PostCardProps } from "./PostCard";

export type PostListProps = {
  posts: PostCardProps[];
};

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap items-center">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default PostList;
