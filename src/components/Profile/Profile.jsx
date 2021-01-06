import React from 'react';
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';
// import store from '../redux/store';




const Profile = (props) => {
      
     
      return ( <div>
     <ProfileInfo /> 
     <MypostsContainer />
    </div>
      )
}


export default Profile