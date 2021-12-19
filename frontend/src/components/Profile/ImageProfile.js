// On importe "React", useState, useDispatch et useSelector
import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

// On importe la logique de uploadPicture dans le fichier user.action
import { updatePicture, getUser } from "../../actions/user.action";

export default function ImageProfile() {

  // On crée un useState pour récupérer l'image qu'on envoyez au backend
  const [image, setImage] = useState();
  // On utilise useDispatch pour dispatch...
  const dispatch = useDispatch();
  // On utilise UseSelector pour récupérer le state
  const userData = useSelector((state) => state.userReducer)

  // On crée  la fonction handlePicture pour modifier l'image de profile 
  const handlePicture = () => {
    console.log(image);
    const data = new FormData();
    // data.append("filename", userData.id);
    // data.append("bio", "Coucou je suis bio")
    data.append("image", image)

    dispatch(updatePicture(data, userData.id))
    dispatch(getUser(userData.id))
  };

  return (
    <form onSubmit={handlePicture} className="profil-main-img border-bottom m-3" encType="multipart/form-data">
      <label className="form-label text-center text-dark fs-3" htmlFor="image">
        Modifier votre image
      </label>
      <input
        type="file"
        className="form-control"
        style={{width:"75%"}}
        id="image"
        name="image"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={(e) => {console.log(e.target.files[0]); setImage(e.target.files[0])}}
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
