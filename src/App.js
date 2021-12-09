import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UidContext } from "./components/AppContext";
import { getUser } from "./actions/user.action";
import Routes from "./components/Routes";

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setUid(localStorage.getItem("userId"));
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
