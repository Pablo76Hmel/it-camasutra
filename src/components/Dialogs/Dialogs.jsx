import React from 'react';
import s from './Dialogs.module.css';
import MessageItems from "./MessageItems/MessageItems"
import DialogItems from "./DialogItems/DialogItems"
import { addMessageActionCreater, onMessageChangeActionCreator } from '../redux/store';



const Dialogs = ( props ) => {
let messageElements=props.state.messagesData.messages.map( s=>
<MessageItems message={s.message} />)
let dialogElements=props.state.dialogData.map( dialog=>
<DialogItems name={dialog.name} id={dialog.id} />)
     

    let newMessageElement=React.createRef();

    let AddMessage=()=> {
        props.AddNewMessage();
            }  
    let onMessageChange = ()=> {
            let newText= newMessageElement.current.value;
            props.newMessageChange(newText);
            }

    return (
    <div>       
       <div className={s.dialogs}>
           <div className={s.dialogItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                    {messageElements}
                <div>
                        <textarea className={s.textArea}  ref={newMessageElement} 
                        onChange={onMessageChange} value={props.newMessageText} />
                </div>
                <div>
                        <button  onClick={AddMessage}>turn on</button>
                </div>
            </div>
        </div> 
    </div>
    )
}
export default Dialogs;
