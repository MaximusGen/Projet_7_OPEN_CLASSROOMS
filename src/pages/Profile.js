import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";

// On importe Link pour remplacer la balise <a>
import { Link } from "react-router-dom";

// On importe les components pour la page Profile

import BoxProfil from "../components/Profile/BoxProfil";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarOff from "../components/Navbar/NavbarOff";

export default function Profile() {
  //  On importe le UidContext pour permettre de déclarer si l'utilisateur peut avoir accès au contenu de la page.
  const uid = useContext(UidContext);
  

  return (
    <>
      {/* Si la personne est connecté, elle à accès à :  */}

      {uid ? (
        <>
          {/* Header avec le components NavBar */}

          <header>
            <Navbar />
          </header>

          {/* Main si l'utilisateur est connecté : */}

          <main>
            <div className="container">
              <div className="row">
                <div className="col_8_md">
                  <BoxProfil />
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          {/* Si la personne n'est pas connecté, elle n'à  pas access au contenue de la profil :  */}

          <header>
            {/* NavBar: components NavbarOff*/}

            <NavbarOff />
          </header>

          {/* Main si l'utilisateur n'est pas connecté : */}

          <main>
            <div className="profil-off">
              <div className="content-profil-off">
                <h1 className="text-center">
                  VOUS NE POUVEZ PAS ACCEDER AU CONTENUE CETTE PAGE ⚠️ !
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

      {/* Footer: components Footer */}

      <Footer />
    </>
  );
}
