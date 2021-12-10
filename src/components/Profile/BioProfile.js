// On importe "React" et useSelector
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateBio} from "../../actions/user.action"

export default function BioProfile() {
  // On se sert de useData pour récupérer les informations de l'utilisateur dans le state(située dans le fichier index)
  const userData = useSelector((state) => state.userReducer);
   
  const dispatch = useDispatch();

  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
      dispatch(updateBio(userData.id, bio))
      setUpdateForm(false);
  }


  return (
    <div className="post-main-bio">
      <h3 className="text-dark">Bio</h3>
      {updateForm === false && (
        <>
          <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
          <button
            className="btn btn-primary"
            onClick={() => setUpdateForm(!updateForm)}
          >
            Modifier votre Bio
          </button>
        </>
      )}
      {updateForm && (
        <>
          <textarea
           className="form-control"
           cols="100"
           rows="3"
            type="text"
            defaultValue={userData.bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <br />
          <button className="btn btn-primary" onClick={handleUpdate}>Valider votre Modification</button>
        </>
      )}
    </div>
  );
}
