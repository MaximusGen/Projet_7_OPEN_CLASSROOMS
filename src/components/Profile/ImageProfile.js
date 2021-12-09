import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { uploadPicture } from "../../actions/user.action";

export default function ImageProfile() {
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer)

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.username);
    data.append("userId", userData.id);
    data.append("image", image[0])

    dispatch(uploadPicture(data, userData.id))
  };

  return (
    <form onSubmit={handlePicture} className="profil-main-img border-bottom m-3">
      <label className="form-label text-center text-dark fs-3" htmlFor="image">
        Modifier votre image
      </label>
      <input
        type="file"
        className="form-control input-image"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary m-3"
      >
        Envoyez
      </button>
    </form>
  );
}
