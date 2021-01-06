import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, onPostChangeActionCreator } from '../../redux/store';
import Mypost from './Myposts';



let mapStateToProps=(state)=>{
  return { 
         post:state.postData.post,
         newPostText:state.postData.newPostText
  }
};
let mapDispatchToProps=(dispatch)=>{
  return {
    updateNewPostText:(text)=>{
      dispatch(onPostChangeActionCreator(text));
    },
    addNewPost:()=>{
      dispatch(addPostActionCreater());
    }
  }
};
const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Mypost);

export default MypostsContainer