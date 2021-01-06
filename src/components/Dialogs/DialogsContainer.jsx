import React from 'react';
import Dialogs from "./Dialogs"
import { addMessageActionCreater, onMessageChangeActionCreator } from '../redux/store';
import { connect } from 'react-redux';

  let mapToStateProps=(state)=>{
          return {
                state:state.dialogMessageData,
                newMessageText:state.dialogMessageData.messagesData.newMessageText
          }
  };
  let mapDispatchToProps=(dispatch)=>{
          return {
                AddNewMessage:()=>{
                        dispatch(addMessageActionCreater())
                },
                newMessageChange:(newText)=>{
                        dispatch(onMessageChangeActionCreator(newText))
                }
        }
  };

  const DialogsContainer=connect(mapToStateProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;

