// On importe "axios", "React" et "useState"
import React, { useState } from "react";
import axios from 'axios';


export default function ModalRegister() {

  // On créer des useStates pour récuperer les valeurs de email, password, username et bio 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");


  const isEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailError = document.getElementById('email-label');
  
  
    if(email.match(emailRegex)) {
      emailError.innerHTML ="E-mail:"
      emailError.style.color ="#000"
      return true;
    } else {
      emailError.innerHTML = "Votre e-mail est incorrect ! ⚠️"
      emailError.classList.remove("texte-dark")
      emailError.style.color = "#b31b1b";
      return false
    }
  }

  const isPassword = () => {
    const passwordRegex = /^(?=.*\d).{4,8}$/;
    const passwordError = document.getElementById('password-label');

      if(password.match(passwordRegex)) {
        passwordError.innerHTML ="Mot de passe:"
        passwordError.style.color ="#000"
        return true;
      } else {
        passwordError.innerHTML = "Votre password est incorrect ! ⚠️"
        passwordError.classList.remove("texte-dark")
        passwordError.style.color = "#b31b1b";
        return false
      }
   }

  const isUsername = () => {
    const usernameError = document.getElementById('username-label');

      if(username) {
        usernameError.innerHTML ="Nom/Prénom:"
        usernameError.style.color ="#000"
        return true;
      } else {
        usernameError.innerHTML = "Votre pseudo est incorrect ! ⚠️"
        usernameError.classList.remove("texte-dark")
        usernameError.style.color = "#b31b1b";
        return false
      }
   }

   // On créer la fonction handleSubmit pour l'inscription de l'utilisateur
  const handleSubmit = (e) => {

    e.preventDefault();
    //  const confirmPassword = document.getElementById('confirmPassword')
     const status = document.querySelector('.status');
     
     // Si username, password et email sont remplis et correct alors on utilise axios pour appeller l'api du backend
     if(isUsername() && isEmail() && isPassword()) {
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
      isEmail(null)
      isPassword(null)
      isUsername(null)
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
            
          />

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
