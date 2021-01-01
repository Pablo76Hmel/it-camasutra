import React from 'react';
import Dialogs from "./Dialogs"
import { addMessageActionCreater, onMessageChangeActionCreator } from '../redux/store';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
       return (
        <StoreContext.Consumer>
                {(store)=>{           
                        let state=store.getState().dialogMessageData;
                        // let newMessageElement=React.createRef();
                        let onAddMessage=()=> {
                                store.dispatch(addMessageActionCreater());
                                }  
                        let onMessageChangeBody = (newText)=> {
                                // let newText= newMessageElement.current.value;
                                store.dispatch(onMessageChangeActionCreator(newText));
                                }
                return ( 
                <Dialogs 
                        state={state}
                        dispatch={store.dispatch} 
                        newMessageChange={onMessageChangeBody} 
                        AddNewMessage={onAddMessage}
                        newMessageText={state.messagesData.newMessageText} 
                        /> )
                   }
                }
        </StoreContext.Consumer>
      )
  }
export default DialogsContainer;

