import React from 'react';
import { addPostActionCreater, onPostChangeActionCreator } from '../../redux/store';
import s from './Myposts.module.css'
import Post from './Post/Posts';





const Myposts = (props) => {

  let postElements=
  props.post.map(s=><Post message={s.message} number={s.number} likeSum={s.likeSum}/>);
  

  let newPostElement = React.createRef();

  let onPostChange = ()=> {
      let text= newPostElement.current.value;
      props.updateNewPostText(text);
          }

  let onAddPost=()=> {
      props.addNewPost();
          }
        return  (      
      <div>
        <p className={s.item}>My post</p>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
          </div>
          <div>
            <button onClick={onAddPost}> Add post</button>
          </div>
             {postElements}  
        </div>        
       </div>
      )
}

export default Myposts