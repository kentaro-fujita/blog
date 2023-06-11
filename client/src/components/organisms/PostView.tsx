import React, { FC, Fragment } from "react";
import PostViewTop, { PostViewTopProps } from "../molecules/PostViewTop";
import PostViewContent, {
  PostViewContentProps,
} from "../molecules/PostViewContent";

export type PostViewProps = {
  post: PostViewTopProps & PostViewContentProps;
};

const PostView: FC<PostViewProps> = ({ post }) => {
  return (
    <Fragment>
      <PostViewTop {...post} />
      <hr></hr>
      <PostViewContent content={post.content} />
    </Fragment>
  );
};

export default PostView;
