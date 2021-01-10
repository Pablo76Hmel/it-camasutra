import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import './App.css'
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import {Route} from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';







function App(props) {
  return (
      <div className="app-wrapper">
              <Header />
              <Nav className="nav"/>  
          <div className="app-wrapper-content"> 
              <Route path='/profile' render={ ()=> 
                <Profile /> 
                     }/>
                <Route path='/dialogs' render={  ()=>
                <DialogsContainer />
                     }/>
              <Route path='/users' render={ () =><UsersContainer />}/>
              <Route path='/music' render={ () =><Music />}/>
              <Route path='/news' render={ ()=><News />}/>
              <Route path='/setting' render={ ()=><Setting />}/>
          </div>
      </div>
    );
}

export default App;