// On importe "React", useSelector et axios
import React from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';

// On importe le component ImageProfile
import ImageProfile from './ImageProfile'
import BioProfile from './BioProfile';
import { dateParser } from '../../utils/Utils';

export default function BoxProfil() {

  // On se sert de useData pour récupérer les informations de l'utilisateur dans le state(située dans le fichier index)
    const userData = useSelector((state) => state.userReducer)

    // On créer la fonction handleDelete pour que l'utilisateur puisse supprimer son compte
    const handleDelete = () => {
      const token = localStorage.getItem('token');
      axios.delete(`${process.env.REACT_APP_API_URL}api/auth/${userData.id}`, {
        headers: { 'Authorization': 'Bearer ' + token}
      })
      .then(() => {
        if(window.confirm("Voulez vous vraiment supprimer votre compte?")) {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          window.location = "/"
        }
      })
      .catch((err) => console.log(err))
    }
   
    return (
        <div className="profil-container" style={{backgroundColor:"#fff", width:"100%"}}>
        <div className="profil-header border-bottom m-3">
          <img
            className=" rounded-img m-3"
            src={userData.imageUrl}
            alt={userData.username}
          />
          <h1 className="text-dark fs-2">{userData.username}</h1>
          <button onClick={handleDelete} type="button" className="btn btn-primary btn-floating bg-tw">
          <i className="fa fa-trash fs-4" aria-hidden="true"></i>
          </button>
        </div>
        <div className="profil-main border-bottom m-3">
           <ImageProfile />
           <BioProfile />
        </div>
        <div className="profil-footer m-3">
          <p>Modifer le: {dateParser(userData.updatedAt)} </p>
          <p className="">Créer le: {dateParser(userData.createdAt)}</p>
        </div>
      </div>
    )
}
