import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.action';
import Routes from './components/Routes'

function App() {

  
   useDispatch(getUser());

  return (
      <Routes />
  )
}

export default App;
