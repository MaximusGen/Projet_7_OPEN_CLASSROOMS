// On importe "React", useState, useDispatch et useSelector
import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

// On importe la logique de uploadPicture dans le fichier user.action
import { updatePicture } from "../../actions/user.action";

export default function ImageProfile() {

  // On crée un useState pour récupérer l'image qu'on envoyez au backend
  const [image, setImage] = useState();
  // On utilise useDispatch pour dispatch...
  const dispatch = useDispatch();
  // On utilise UseSelector pour récupérer le state
  const userData = useSelector((state) => state.userReducer)

  // On crée  la fonction handlePicture pour modifier l'image de profile 
  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.username);
    data.append("userId", userData.id);
    data.append("file", image)

    dispatch(updatePicture(data, userData.id))
  };

  return (
    <form onSubmit={handlePicture} className="profil-main-img border-bottom m-3">
      <label className="form-label text-center text-dark fs-3" htmlFor="image">
        Modifier votre image
      </label>
      <input
        type="file"
        className="form-control input-image"
        id="image"
        name="image"
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
