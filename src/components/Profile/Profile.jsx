import React from 'react';
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';
// import store from '../redux/store';




const Profile = (props) => {
      
     
      return ( <div>
     <ProfileInfo /> 
     <MypostsContainer
      // store={props.store}
       />
    </div>
      )
}


export default Profile