import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SendPostBox() {
    const userData = useSelector((state) => state.userReducer);
    const [text, setText] = useState("");

    const handlePost = () => {}
  return (
    <>
      <div className="post-container border border-dark p-4 m-3" style={{backgroundColor:"#fff"}}>
        <div className="post-header border-bottom">
          <img src={userData.imageUrl} alt="" className="img-sendPost m-3" />
          <h4 className="post-header-username m-2" style={{color:"#000"}}>{userData.username}</h4>
        </div>
        <form onSubmit={handlePost} className="m-3" width="100%">
          <div className="post-text border-bottom m-3">
            <label className="text-dark fs-5" htmlFor="textAreaExample">
              Exprimez-vous:
            </label>
            <textarea
              className="form-control"
              cols="100"
              rows="3"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <label className="form-label" htmlFor="image"></label>
            <input
              type="file"
              className="form-control"
              style={{width:"auto"}}
              id="image"
              name="image"
              accept=".jpg, .jpeg, .png, .gif"
            />
          </div>
          <div className="post-submit mt-3">
            <input className="btn btn-primary" type="submit" value="Envoyez" />
          </div>
        </form>
      </div>
    </>
  );
}
