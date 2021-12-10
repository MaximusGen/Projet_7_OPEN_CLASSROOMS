// // On importe "React", useState, useContext et Navigate
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

// On importe les components Footer, Modal Connect, Modal Register et UidContext
import Footer from "../components/Footer";
import ModalConnect from "../components/Log/ModalConnect";
import ModalRegister from "../components/Log/ModalRegister";
import { UidContext } from "../components/AppContext"; 

export default function Home() {
  // On crée des UseState
  const [modalConnect, setModalConnect] = useState(true);
  const [modalRegister, setModalRegister] = useState(false);

  const uid = useContext(UidContext);
  // On utilise la fonction handleModals pour savoir quelle Modal affichez à l'utilisateur quand il clique sur "Se connecter" ou "Inscription"

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setModalRegister(true);
      setModalConnect(false);
    } else if (e.target.id === "login") {
      setModalRegister(false);
      setModalConnect(true);
    }
  };

  return (
    <>

    {/* Si l'utilisateur est connecter, il est redirigé vers la page Profile */}
      {uid ? (
        <>
          <Navigate to="/profile" />"
        </>
      ) : (
        <>
        {/* Si l'utilisateur n'est pas connecter la page affiche: */}

            {/* Header avec la nav */}
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg">
              <div className="container-fluid">
                <img src="img/groupomania.png" alt="" height="50px" />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarExample01"
                  aria-controls="navbarExample01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li
                      className={modalRegister ? "active-btn" : null}
                      onClick={handleModals}
                      id="register"
                    >
                      Inscription
                    </li>
                    <li
                      className={modalConnect ? "active-btn" : null}
                      onClick={handleModals}
                      id="login"
                    >
                      Se Connecter
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          {/* Main avec la présentation du site et les modals de connection et inscription */}

          <div id="main" className="p-5 text-center bg-image image-bg">
            <div className="mask bg-mask">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="text-size-h1">Groupomana Social</h1>
                  <p className="text-size-h5">
                    En cours de développement ... 🚧  !
                  </p>
                  <div className="connection-form">
                    <div className="form-content">
                      {modalConnect && <ModalConnect />}
                      {modalRegister && <ModalRegister />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Header avec la Navbar de la page Home  */}

      {/* Footer avec le component */}

      <Footer />
    </>
  );
}
