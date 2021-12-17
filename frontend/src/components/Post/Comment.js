import React from "react";
import { useSelector } from "react-redux";

import { isEmpty } from "../../utils/Utils";
import CommentBox from "./CommentBox";

export default function Comment({ post }) {

  const commentData = useSelector((state) => state.commentReducer);


  return (
    <>
      {!isEmpty(commentData[0]) &&
        commentData.map((comment) => {
          if (post.id === comment.ArticleId) {
            return  <CommentBox key={comment.id} comment={comment} post={post} />
          } else return null;
        })}
    </>
  );
}
