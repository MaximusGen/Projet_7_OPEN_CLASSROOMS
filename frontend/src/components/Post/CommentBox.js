import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateComment,
  deleteComment,
} from "../../actions/comment.action";
import { isEmpty, timestampParser } from "../../utils/Utils";

export default function CommentBox({ post, comment }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const [isUpdatedComment, setIsUpdatedComment] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);

  const updateCommentText = (e) => {
    if (textUpdate) {
      dispatch(updateComment(comment.id, textUpdate));
    }
    setIsUpdatedComment(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Vous êtes sur de vouloir supprimer ce commentaire ?")) {
      dispatch(deleteComment(comment.id));
    }
  }

  return (
    <>
      <div className="post-comment mt-3" key="{comment.id}">
        <div className="post-comment-header flex-comment">
          <div className="comment-header-user">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === comment.UserId) {
                      return user.imageUrl;
                    } else return null;
                  })
                  .join("")
              }
              alt=""
              className="profile-photo-sm"
            />
            <h5>
              {!isEmpty(usersData[0]) &&
                usersData.map((user) => {
                  if (user.id === comment.UserId) {
                    return user.username;
                  } else return null;
                })}
            </h5>
          </div>
          <div className="comment-header-info">
            <p>
              {timestampParser(comment.updatedAt)}
              {userData.isAdmin === "1" && (
                <button onClick={handleDelete}>
                  <i
                    className="fa fa-trash"
                    id="deleteIcon"
                    aria-hidden="true"
                  ></i>
                </button>
              )}
              {userData.id === comment.UserId && (
                <>
                  <button
                    onClick={() => setIsUpdatedComment(!isUpdatedComment)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button onClick={handleDelete}>
                    <i
                      className="fa fa-trash"
                      id="deleteIcon"
                      aria-hidden="true"
                    ></i>
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="post-comment-text mt-2">
          {isUpdatedComment === false && <p>{comment.text}</p>}
          {isUpdatedComment && (
            <div className="edit-post">
              <textarea
                defaultValue={comment.text}
                onChange={(e) => setTextUpdate(e.target.value)}
                name="text"
                id="text"
                cols="30"
                className="form-control"
                rows="2"
              ></textarea>
              <br />
              <button className="btn btn-primary" onClick={updateCommentText}>
                Validez votre modification
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
