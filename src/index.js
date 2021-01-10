import './index.css';
import store  from  './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";


    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
             <App  />
          </Provider> 
        </BrowserRouter>,
      document.getElementById('root')
    );


 


// _rerenderEntireTree(store.getState());
// store.subscribe(_rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
