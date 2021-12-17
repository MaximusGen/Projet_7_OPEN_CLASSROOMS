import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../actions/post.action";
import { timestampParser } from "../../utils/Utils";

export default function SendPostBox() {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [postPicture, setPostPicture] = useState(null)

  
  
  const handlePost =  () => {
    console.log(text, image);
    
    if (text || postPicture) {
      const data = new FormData();
      // data.append("filename", userData.id);
      data.append("text", text)
      data.append("image", image);

      console.log(data, "handlepost");
      dispatch(createPost(data));
      // dispatch(getPosts());
      // cancelPost();
    } else {
      alert("Veuillez entrer un message");
    }
  };
  
  const cancelPost = () => {
    setText("");
    setPostPicture("")
    setImage("");
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  return (
    <>
      <div
        className="send-post-container border border-dark p-4 m-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="send-post-header border-bottom m-2">
          <img src={userData.imageUrl} alt="" className="img-sendPost" />
          <h4
            className="post-header-username m-2 fs-2"
            style={{ color: "#000" }}
          >
            {userData.username}
          </h4>
        </div>
        <div className="send-post-main m-4">
          <label className=" fs-5" id="text-label" htmlFor="text">
            Exprimez-vous:
          </label>
          <textarea
            className="form-control fs-4"
            cols="100"
            rows="3"
            name="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          {text || postPicture ?(
            <div className="post-container mt-3" style={{border: "1px solid #000", padding: "10px", width:"100%"}}>
               <div className="post-header border-bottom">
                 <img className="img-post m-3" src={userData.imageUrl} alt="" />
                 <h4 className="post-username m-2">{userData.username}</h4>
                 <p  style={{ marginBottom: "0", marginTop: "5px" }}>{timestampParser(Date.now())}</p>
               </div>
               <p className="fs-4">{text}</p>
               <img src={postPicture} alt="" />
            </div>
          ) : null}
        </div>
        <div className="send-post-footer">
          <div className="image-upload">
            <img src="../img/image.svg" alt="" />
            <input
              type="file"
              id="image"
              name="image"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={(e) => handlePicture(e)}
            />
          </div>
          {text || postPicture ? (
            <button
              className="btn btn-danger btn-rounded btn-lg"
              onClick={cancelPost}
            >
              Annuler votre message
            </button>
          ) : null}
          <button
            className="btn btn-dark btn-rounded btn-lg"
            onClick={handlePost}
          >
            Envoyez
          </button>
        </div>
      </div>
    </>
  );
}
