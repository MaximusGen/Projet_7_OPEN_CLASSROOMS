import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";

// On importe Link pour remplacer la balise <a>
import { Link } from "react-router-dom";

// On importe les components pour la page Post
import Footer from "../components/Footer";
import NavbarOff from "../components/Navbar/NavbarOff";
import Navbar from "../components/Navbar/Navbar";
import PostBox from "../components/Post/PostBox";
import SendPostBox from "../components/Post/SendPostBox";

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

          <main className="main-post">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-4">
                  <SendPostBox />
                  <PostBox/>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          {/* Header avec le component NavbarOff */}

          <header>
            <NavbarOff />
          </header>

          {/* Main si l'utilisateur n'est pas connecté : */}
          
          <main className="main-post">
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
          </main>
        </>
      )}

      {/* Footer avec le component Footer */}
      <Footer />
    </>
  );
}
