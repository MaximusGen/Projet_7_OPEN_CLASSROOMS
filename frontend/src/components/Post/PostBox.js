import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, deletePost } from "../../actions/post.action";
import { isEmpty, dateParser } from "../../utils/Utils";
import Comment from "./Comment";
import { getComments, addComment } from "../../actions/comment.action";

export default function PostBox({ post }) {
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [textComment, setTextComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
   
  useEffect(() => {
      const btn = document.getElementById('button');
      if(userData.isAdmin === "1") {
        btn.style.display =  'none';
      } else return null;
  }, [userData.isAdmin])


  const handleComment = async () => {
    if (textComment) {
      await dispatch(addComment(post.id, textComment));
      dispatch(getComments());
      setTextComment("");
      setShowComments(true);
    } else {
      alert("Veuillez remplir le formulaire");
    }
  };

  const updatePostText = () => {
    if (textUpdate) {
      dispatch(updatePost(post.id, textUpdate));
    }
    setIsUpdated(false);
  };

  const handleDelete = () => {
    if (window.confirm("Vous êtes sur de vouloir supprimer ce message ?")) {
      dispatch(deletePost(post.id));
    }
  };

  return (
    <>
      <div className="post-container border border-dark bg-light p-4 m-4">
        <div className="post-header border-bottom">
          <img
            className="img-post m-3"
            src={
              !isEmpty(usersData[0]) &&
              usersData
                .map((user) => {
                  if (user.id === post.UserId) {
                    return user.imageUrl;
                  } else return null;
                })
                .join("")
            }
            alt=""
          />
          <h4
            className="post-username m-2"
            style={{ color: "#000", fontSize: "1.7rem" }}
          >
            {!isEmpty(usersData[0]) &&
              usersData.map((user) => {
                if (user.id === post.UserId) {
                  return user.username;
                } else return null;
              })}
             <span id="span"></span>
          </h4>
          <p style={{ marginBottom: "0", marginTop: "5px" }}>
            Publié le: &nbsp;
            {dateParser(post.createdAt)}
            {userData.isAdmin === "1"  && (
              <>
              
              <button onClick={handleDelete}>
                <i
                  className="fa fa-trash"
                  id="deleteIcon"
                  aria-hidden="true"
                ></i>
              </button>
              </>
            )}
            {userData.id === post.UserId  && (
              <>
                <button onClick={() => setIsUpdated(!isUpdated)}>
                  <i className="fas fa-edit"></i>
                </button>
                <button id="button" onClick={handleDelete}>
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
        <br />
        {isUpdated === false && <p>{post.text}</p>}
        {isUpdated && (
          <div className="edit-post">
            <textarea
              defaultValue={post.text}
              onChange={(e) => setTextUpdate(e.target.value)}
              name="text"
              id="text"
              cols="30"
              className="form-control"
              rows="10"
            ></textarea>
            <br />
            <button className="btn btn-primary" onClick={updatePostText} style={{marginBottom:"10px"}}>
              Validez votre modification
            </button>
            <br />
          </div>
        )}
        <img src={post.imageUrl} className="img mb-5" alt={post.imageUrl} />
        <div className="post-footer border-bottom">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setShowComments(!showComments)}
          >
            {post.Comments.length} Commentaires{" "}
            <i className="far fa-comments"></i>
          </p>
        </div>
        {showComments && <Comment post={post} />}
        <div className="comment-send">
          <form action="" className="form-3" onSubmit={handleComment}>
            <label className="" htmlFor="text">
              Votre commentaire:
            </label>
            <input
              type="text"
              id="text"
              className="form-control"
              value={textComment}
              onChange={(e) => setTextComment(e.target.value)}
            />
            <button className="btn btn-dark mb-3 btn-rounded" type="submit">
              Envoyez
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
