import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.action";
import { isEmpty, dateParser } from "../../utils/Utils";

export default function PostBox() {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
    
  }, [loadPost, dispatch]);
   

  const handleDelete = () => {
   const deleteIcon = document.getElementById('deleteIcon');
   const token = localStorage.getItem('token');

    if(userData.id === postData.id) {
        axios({
          method:"delete",
          url: `${process.env.REACT_APP_API_URL}api/article/${postData.id}`,
          headers: { 'Authorization': 'Bearer ' + token}
        })
        .then(() => {

        })
        .catch((error) => {console.log(error);})
    } else {
       deleteIcon.style.display = "none";
    }
  }
  return (
    <>
      {!isEmpty(postData[0]) &&
        postData.map((post) => {
          return (
            <>
              <div
                className="post-container border border-dark bg-light p-4 m-3"
                key={post.id}
              >
                <div className="post-header flex border-bottom">
                  <img
                    className="img-post m-3"
                    src={
                      !isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user.id === post.UserId) {
                            return user.imageUrl;
                          }
                        })
                        .join("")
                    }
                    alt=""
                  />
                  <h4 className="post-username m-2">
                    {!isEmpty(usersData[0]) &&
                      usersData.map((user) => {
                        if (user.id === post.UserId) {
                          return user.username;
                        }
                      })}{" "}
                  </h4>
                  <p>
                    {dateParser(post.updatedAt)}{" "}
                    <span onClick={handleDelete}>
                      <i class="fa fa-trash" id="deleteIcon" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
                <div className="post-main mt-3 border-bottom">
                  <p>{post.text}</p>
                  <img
                    src={post.imageUrl}
                    className="img mb-5"
                    alt=""
                    width="100%"
                  />
                  <div className="post-footer flex-like">
                    <p>
                      Commentaires <i class="far fa-comments"></i>
                    </p>
                    <div>
                      <i className="far fa-thumbs-up m-4">5</i>
                      <i className="far fa-thumbs-down m-4">10</i>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      {/*
        <div className="post-main mt-3 border-bottom">
          <p>
          </p>
          <img
            src=""
            className="img mb-5"
            alt=""
            width="100%"
          />
          <div className="post-like flex-like">
            <i className="far fa-thumbs-up m-4">5</i>
            <i className="far fa-thumbs-down m-4">10</i>
          </div>
        </div>
        <div className="post-comment mt-3">
          <h5 className="text-center">Commentaires</h5>
          <div className="post-comment-detail flex-comment">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
              className="profile-photo-sm"
            />
            <h5>John Carpenter</h5>
          </div>
          <div className="post-comment-text mt-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi reprehenderit iste, aliquid esse
              repudiandae dicta?
            </p>
          </div>
        </div>
        <div className="post-send">
          <div className="form-outline m-3">
            <input
              type="text"
              id="typeText"
              className="form-control"
            />
            <label className="form-label" htmlFor="typeText">
            Votre commentaire
            </label>
            </div>
            <button className="btn btn-primary mb-3" type="submit">
            Envoyez
            </button>
        </div> */}
    </>
  );
}
