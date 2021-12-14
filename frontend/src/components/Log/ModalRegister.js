// On importe "axios", "React" et "useState"
import React, { useState } from "react";
import axios from 'axios';


export default function ModalRegister() {

  // On créer des useStates pour récuperer les valeurs de email, password, username et bio 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

   // On créer la fonction handleSubmit pour l'inscription de l'utilisateur
  const handleSubmit = (e) => {

    e.preventDefault();
    //  const confirmPassword = document.getElementById('confirmPassword')
     const status = document.querySelector('.status');
     
     // Si username, password et email sont remplis et correct alors on utilise axios pour appeller l'api du backend
     if(username && email && password) {
       axios.post(`${process.env.REACT_APP_API_URL}api/auth/register` , {
         username,
        email,
        password,
        bio
      })
      .then((res) => {
        console.log(res.data);
        status.innerHTML = 'Vous êtes désormais inscris, veuillez vous connecter ! '
        status.style.color = '#fff'
        status.style.background = 'green'
        status.style.padding = '10px'
        status.style.opacity = '1'

        setTimeout(() => {
          status.style.opacity = '0'
        }, 5000)
        
      })
      .catch((err) => console.log(err))
    } else {

      // Sinon on renvoie une erreur dans la div status
      status.innerHTML = 'Veuillez remplir correctement le formulaire !'
      status.style.color = '#fff'
      status.style.background = 'red'
      status.style.padding = '10px'

      setTimeout(() => {
        status.style.opacity = '0'
      }, 5000)
      
    }

  };

  return (
    <>

           {/* On créer un formulaire pour se connecter */}    
           <form action="" onSubmit={handleSubmit}>
        <div className="md-form mb-0">
          <label htmlFor="username" id="username-label" className="fs-4 texte-dark">
            Nom/Prénom:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control fs-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email" id="email-label" className="fs-4 texte-dark">
            E-mail:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control fs-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" id="password-label" className="fs-4 texte-dark">
            Mot de passe:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control fs-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* <label htmlFor="confirmPassword" className="fs-4 texte-dark">
           Confirmer votre mot de passe:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control fs-4"
            required
          />
           */}
          <label htmlFor="bio" className="fs-4 texte-dark">
           Bio:
          </label>
          <textarea
            type="text"
            id="bio"
            name="bio"
            className="form-control fs-4"
            value={bio}
            onChange={(e) =>setBio(e.target.value)}
            rows="2"
            cols="30"
          />

        </div>
        <br/>
        <button className="btn btn-primary" type="submit">Connexion</button>
        <br />
        <div className="status"></div> 
      </form>
    </>
  );
}
