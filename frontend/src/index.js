import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import App from './App';
import './styles/index.scss';
import {getUsers} from './actions/users.action'
import { getPosts } from './actions/post.action';
import { getComments } from './actions/comment.action';
// import { getLikes } from './actions/like.action';


const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk)),
)


store.dispatch(getUsers())
store.dispatch(getPosts())
store.dispatch(getComments())
// store.dispatch(getLikes())

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,

  document.getElementById('root')
);
