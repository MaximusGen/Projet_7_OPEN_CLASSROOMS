import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UidContext } from "./components/AppContext";
import { getUser } from "./actions/user.action";
import Routes from "./components/Routes";

function App() {

  // On déclare un useState pour pouvoir y mettre le userId de la personne connecter
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  // On utilise UseEffect pour transmettre les données de l'utilisateur qui sont stockées dans le LocalStorage
  useEffect(() => {
    setUid(localStorage.getItem("userId"));

    // on importe les données de l'utilisateur qui sont stockées dans la base de données
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (

    // On Crée un UidContext avec la valeur uid(userId de la personne connectée) pour permettre d'avoir les informations de l'utilisateur 
    // en haut de l'application 
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
