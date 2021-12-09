import React from 'react'
import {useSelector} from 'react-redux'
import ImageProfile from './ImageProfile'
import axios from 'axios';

export default function BoxProfil() {
    const userData = useSelector((state) => state.userReducer)

    const handleDelete = () => {
      const token = localStorage.getItem('token');
      axios.delete(`${process.env.REACT_APP_API_URL}api/auth/${userData.id}`, {
        headers: { 'Authorization': 'Bearer ' + token}
      })
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location = "/"
      })
      .catch((err) => console.log(err))
    }
   
    return (
        <div className="profil-container bg-light shadow-5">
        <div className="profil-header border-bottom m-3">
          <img
            className=" rounded-img m-3"
            src={userData.imageUrl}
            alt={userData.imageUrl}
          />
          <h1 className="text-dark fs-2">{userData.username}</h1>
          <button onClick={handleDelete} type="button" className="btn btn-primary btn-floating bg-tw">
          <i className="fa fa-trash fs-4" aria-hidden="true"></i>
          </button>
        </div>
        <div className="profil-main border-bottom m-3">
          <ImageProfile />
          <div className="post-main-bio">
            <h3 className="text-dark">Bio</h3>
            <p>
              {userData.bio}
            </p>
          </div>
          <div className="profil-main-edit">
            <div className="form-outline mb-3">
            </div>
            <button className="btn btn-primary mb-3">
              Modifier votre bio
            </button>
          </div>
        </div>
        <div className="profil-footer m-3">
          <p>Modifer le 26/11/2021, 15h37.</p>
          <p className="">Créer le 26/11/2021, 14h37.</p>
        </div>
      </div>
    )
}
