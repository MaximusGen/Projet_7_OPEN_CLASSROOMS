import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";

// On importe Link pour remplacer la balise <a>
import { Link } from "react-router-dom";

// On importe les components pour la page Post
import Footer from "../components/Footer";
import NavbarOff from "../components/Navbar/NavbarOff";
import Navbar from "../components/Navbar/Navbar";

export default function Post() {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <>
          {/* Header avec le component Navbar  */}

          <header>
            <Navbar />
          </header>

          {/* Main si l'utilisateur est connecté : */}

          <div className="main">
            <div className="container">
              <div className="row flex-center">
                <div className="col-md-8 m-4">
                  <div className="post-container border border-dark bg-light p-4 m-3">
                    <div className="post-header flex border-bottom">
                      <img
                        src="../img/max.jpg"
                        alt=""
                        className="img-fluid rounded-circle m-3"
                      />
                      <h4 className="post-username m-2">Username</h4>
                    </div>
                    <div className="post-text border-bottom m-3 flex-center">
                      <div className="form-outline m-3" width="100%">
                        <textarea
                          className="form-control"
                          id="textAreaExample"
                          rows="4"
                        ></textarea>
                        <label className="form-label" htmlFor="textAreaExample">
                          Texte
                        </label>
                      </div>
                      <button className="btn btn-primary mb-3" type="submit">
                        Image
                      </button>
                    </div>
                    <div className="post-submit mt-3">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        value="Envoyez"
                      />
                    </div>
                  </div>

                  <div className="post-container border border-dark bg-light p-4 m-3">
                    <div className="post-header flex border-bottom">
                      <img
                        className="img-fluid rounded-circle m-3"
                        src="img/max.jpg"
                        alt=""
                        width="50px"
                      />
                      <h4 className="post-username m-2">Username</h4>
                    </div>
                    <div className="post-main mt-3 border-bottom">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nihil sed vitae illum ut optio nisi dolorem saepe
                        aut, enim delectus nesciunt laborum pariatur molestias
                        totam fugiat neque ipsa atque. Ea atque, dolores, veniam
                        molestiae quibusdam pariatur dolore voluptatibus
                        provident rem architecto explicabo. Dolor neque
                        recusandae nihil aut accusantium, sapiente est
                        dignissimos veniam laboriosam beatae sequi vitae dolorum
                        delectus a libero consequatur officiis natus minima
                        tempora quas! Assumenda eaque unde libero consectetur
                        earum natus odio, dignissimos corporis tempora eveniet
                        sapiente amet. Dolores exercitationem voluptas quae
                        aspernatur sed maxime vitae accusamus nobis ipsum animi,
                        distinctio perferendis repellendus neque eum dignissimos
                        modi reprehenderit.
                      </p>
                      <img
                        src="../img/thumbnail_IMG_2028.jpg"
                        className="img mb-5"
                        alt=""
                        width="100%"
                      />
                      <div className="post-like flex-like">
                        <i className="far fa-thumbs-up m-4">5</i>
                        <i className="far fa-thumbs-down m-4">10</i>
                      </div>
                    </div>
                    <div className="post-comment mt-3">
                      <h5 className="text-center">Commentaires</h5>
                      <div className="post-comment-detail flex-comment">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                          className="profile-photo-sm"
                        />
                        <h5>John Carpenter</h5>
                      </div>
                      <div className="post-comment-text mt-2">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi reprehenderit iste, aliquid esse
                          repudiandae dicta?
                        </p>
                      </div>
                    </div>
                    <div className="post-send">
                      <div className="form-outline m-3">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="typeText">
                          Votre commentaire
                        </label>
                      </div>
                      <button className="btn btn-primary mb-3" type="submit">
                        Envoyez
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Header avec le component NavbarOff */}

          <header>
            <NavbarOff />
          </header>

          {/* Main si l'utilisateur n'est pas connecté : */}

          <div className="main">
            <div className="profil-off">
              <div className="content-profil-off">
                <h1 className="text-center">
                  VOUS NE POUVEZ PAS ACCEDER AU CONTENU DE CETTE PAGE ⚠️ !
                </h1>
                <Link className="profil-off-link" to="/">
                  {" "}
                  Veuillez vous connectez sur la page d'Acceuil 🏠 !{" "}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer avec le component Footer */}
      <Footer />
    </>
  );
}
