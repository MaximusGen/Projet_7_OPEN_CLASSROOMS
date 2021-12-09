import axios from "axios";
import React, { useState } from "react";

export default function ModalConnect() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
      .catch((res) => console.log(res.data))
    }
    
  };
  return (
    <>
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
          <label htmlFor="password" className="fs-4 texte-dark">
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
        <div className="status"></div>
      </form>
    </>
  );
}
