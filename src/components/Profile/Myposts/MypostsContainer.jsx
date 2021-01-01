import React from 'react';
import StoreContext from '../../../StoreContext';
import { addPostActionCreater, onPostChangeActionCreator } from '../../redux/store';
import Mypost from './Myposts';




let MypostsContainer = (props) => {
    // let state=props.store.getState();
    // let onPostChange=(text)=> {
    //     // let newText= newPostElement.current.value;
    //     props.store.dispatch(onPostChangeActionCreator(text));
    //         }
    //   let addPost=()=> {
    //     props.store.dispatch(addPostActionCreater());
    //     }
  return (
          <StoreContext.Consumer>
            {(store) =>{
              let state = store.getState();
              let onPostChange=(text)=> {
                // let newText= newPostElement.current.value;
                store.dispatch(onPostChangeActionCreator(text));
                    }
              let addPost=()=> {
                store.dispatch(addPostActionCreater());
                }
              return (
                <Mypost 
                  updateNewPostText={onPostChange} 
                  addNewPost={addPost}
                  post={store.getState().postData.post} 
                  newPostText={state.postData.newPostText} />
                )
             }
            }
          </StoreContext.Consumer>
  )
}


export default MypostsContainer;