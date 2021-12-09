import React, { useState } from "react";
import Footer from "../components/Footer";
import ModalConnect from "../components/Log/ModalConnect";
import ModalRegister from "../components/Log/ModalRegister";

export default function Home() {
  const [modalConnect, setModalConnect] = useState(true);
  const [modalRegister, setModalRegister] = useState(false);

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
      {/* NavBar */}

      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg">
            <div className="container-fluid">
                <img src="img/groupomania.png" alt="" height="50px"/>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className={modalRegister ? "active-btn" : null}
                        onClick={handleModals}
                        id="register">
                            Inscription
                        </li>
                        <li className={modalConnect ? "active-btn" : null}
                      onClick={handleModals}
                      id="login">
                            Se Connecter
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>

      {/* Main  */}

      <div id="intro-example" className="  p-5 text-center bg-image image-bg">
        <div className="mask bg-mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="text-size-h1">Groupomana Social</h1>
              <h5 className="text-size-h5">
                Bienvenue sur le réseau social de Groupomania, <br /> vous
                pouvez partager vos humeurs et votre travail à travers vos
                articles. <br /> Répondre en commentant les articles de vos
                collègues
              </h5>
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

      {/* FOOTER */}
       
       <Footer />
    </>
  );
}
