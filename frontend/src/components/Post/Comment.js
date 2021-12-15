import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment } from "../../actions/comment.action";

import { isEmpty } from "../../utils/Utils";
import CommentBox from "./CommentBox";

export default function Comment({ post }) {
  const [loadComment, setLoadComment] = useState(true);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const commentData = useSelector((state) => state.commentReducer);

  useEffect(() => {
    if (loadComment) {
      dispatch(getComments());
    }
    setLoadComment(false);
  }, [loadComment, dispatch]);

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addComment(post.id, text));
      dispatch(getComments());
    } else {
      alert("Veuillez remplir le formulaire");
    }
  };

  return (
    <>
      {!isEmpty(commentData[0]) &&
        commentData.map((comment) => {
          if (post.id === comment.ArticleId) {
            return (
            <CommentBox key={comment.id} comment={comment} post={post} />
            );
          } else return null;
        })}
      <div className="comment-send">
        <form action="" className="form-3" onSubmit={handleComment}>
          <label className="" htmlFor="text">
            Votre commentaire
          </label>
          <input
            type="text"
            id="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-dark mb-3 btn-rounded" type="submit">
            Envoyez
          </button>
        </form>
      </div>
    </>
  );
}
