// On importe "axios", "React" et "useState"
import axios from "axios";
import React, { useState } from "react";

export default function ModalConnect() {

  // On créer des useStates pour récuperer les valeurs de email et password 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  // On créer la fonction handleSubmit pour que l'utilisateur se connecte
  const handleSubmit = (e) => {
    const status = document.querySelector('.status');
    e.preventDefault();
     
    // Si email et password sont remplie et correct alors on appelle axios pour post avec l'api du backend
    if(email && password) {
      axios.post(`${process.env.REACT_APP_API_URL}api/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        window.location = "/profile"
      })
      .catch(() =>{
        const status = document.querySelector('.status');

        // Sinon on renvoie une erreur dans la div status
        status.innerHTML = 'Vos idenfiants sont incorrect, veuillez réessayer'
        status.style.color = '#fff'
        status.style.background = 'red'
        status.style.padding = '10px'

        setTimeout(() => {
          status.style.opacity = '0'
        }, 5000)
      })
    } else {
        status.innerHTML= 'Veuillez remplir le formulaire !'
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
          <label htmlFor="email" id="email-error" className="fs-4 texte-dark">
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
        </div>
        <br />
        <button className="btn btn-primary">Connexion</button>
        <br />
        <div className="status"></div>
      </form>
    </>
  );
}
