
import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updatePost,deletePost } from "../../actions/post.action";
import { isEmpty, dateParser } from "../../utils/Utils";
import CommentBox from "./CommentBox";

export default function PostBox({post}) {
  const [showComment, setShowComment] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);

  const dispatch = useDispatch();
  
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);


  const updatePostText = () => {
     if(textUpdate) {
       dispatch(updatePost(post.id, textUpdate))
      }
      setIsUpdated(false)
  }

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete')){
       dispatch(deletePost(post.id))
    }
  };


  return (
            <><div className="post-container border border-dark bg-light p-4 m-5">
                <div className="post-header flex border-bottom">
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
                      })}{" "}
                  </h4>
                  <p style={{ marginBottom: "0", marginTop: "5px" }}>
                    {dateParser(post.updatedAt)}
                    {userData.isAdmin === "1" && (
                        <button onClick={handleDelete}>
                        <i                        
                          className="fa fa-trash"
                          id="deleteIcon"
                          aria-hidden="true"
                        ></i>
                        </button>
                    )}
                    {userData.id === post.UserId && (
                      <>
                      <button onClick={() => setIsUpdated(!isUpdated)}>
                        <i 
                         className="fas fa-edit">           
                        </i>
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
                      rows="10">
                      </textarea>
                      <br />
                      <button 
                      className="btn btn-primary"
                      onClick={updatePostText}
                      >
                      Validez votre modification
                      </button>
                    </div>
                  )}
                  <img
                    src={post.imageUrl}
                    className="img mb-5"
                    alt=""
                    width="100%"
                  />
                  <div className="post-footer">
                    <p
                      onClick={() => setShowComment(!showComment)}
                      style={{ cursor: "pointer" }}
                    >
                      Commentaires <i className="far fa-comments"></i>
                    </p>
                    <div>
                      <i className="far fa-thumbs-up m-4">5</i>
                      <i className="far fa-thumbs-down m-4">10</i>
                    </div>
                  </div>
                  {showComment && <CommentBox props={post} />}
                  </div>
            </>
  );
}
