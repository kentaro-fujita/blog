import React, { FC } from "react";
import PostView, { PostViewProps } from "../organisms/PostView";

export type PostTemplateProps = PostViewProps;

const PostTemplate: FC<PostTemplateProps> = ({ ...args }) => {
  return <PostView {...args} />;
};

export default PostTemplate;
