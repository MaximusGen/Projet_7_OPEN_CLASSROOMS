import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UidContext } from "../components/AppContext";
import Footer from "../components/Footer";

export default function Profile() {
  const uid = useContext(UidContext);

  const handleDeconnexion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location = "/";
  };

  return (
    <>
      {uid ? (
        <>
          {/* HEADER */}
          <header>
            {/* <!-- Navbar --> */}

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
                    <li className="nav-item active">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="/profile"
                      >
                        Profil
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" aria-current="page" href="/post">
                        Post
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="#deco"
                        onClick={handleDeconnexion}
                      >
                        Se déconnecter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          {/* Main */}
          <main>
            <div className="container">
              <div className="row">
                <div className="col_8_md">
                  <div className="profil-container bg-light shadow-5">
                    <div className="profil-header border-bottom m-3">
                      <img
                        className=" rounded-img m-3"
                        src="../img/max.jpg"
                        alt=""
                      />
                      <h1 className="text-dark fs-2">Username</h1>
                    </div>
                    <div className="profil-main border-bottom m-3">
                      <div className="profil-main-img border-bottom m-3">
                        <label
                          className="form-label text-dark fs-3"
                          htmlFor="customFile"
                        >
                          Modifier votre image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="customFile"
                        />
                        <button className="btn btn-primary m-3">
                          Modifier
                        </button>
                      </div>
                      <div className="post-main-bio">
                        <h3 className="text-dark">Bio</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sit est dolorum voluptatum quas voluptatem eos
                          labore corporis illum voluptatibus iste quia quo
                          veritatis dolores, id nisi ad voluptas rerum iusto?
                        </p>
                      </div>
                      <div className="profil-main-edit">
                        <div className="form-outline mb-3">
                          <textarea
                            className="form-control"
                            id="textAreaExample"
                            rows="4"
                          ></textarea>
                          <label
                            className="form-label"
                            htmlFor="textAreaExample"
                          >
                            Texte
                          </label>
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
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          {/* NavBar */}

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
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <main>
            <div className="profil-off">
              <div className="content-profil-off">
                <h1 className="text-center">
                  VOUS NE POUVEZ PAS ACCEDER A CETTE PAGE ⚠️ !
                </h1>
                <Link className="profil-off-link" to="/">
                  {" "}
                  Veuillez vous connectez sur la page d'Acceuil 🏠 !{" "}
                </Link>
              </div>
            </div>
          </main>
        </>
      )}

      {/* FOOTER */}

      <Footer />
    </>
  );
}
