
import dialogReducer from "./dialogMessageDataReducer";
import postReducer from "./postDataReducer";




let store = {

_state: {
 postData: {
   newPostText:"Putin bliad Huilo !!!",
   post: [
    {id:1,message:"hello , hi Zello!!!!!! ", number:1 , likeSum:3},
    {id:2,message:"trello trello moe ", number:2 , likeSum:9},
    {id:3,message:"PUTIN huyl ", number:3 , likeSum:6},
    {id:4,message:"treqwerwerwer", number:4 , likeSum:5},
    {id:5,message:"Vaino gavno", number:5 , likeSum:2}
  ]
},
dialogMessageData: {
   dialogData: [
    {id:1,name:"Dmitruch"},
    {id:2,name:"Sergei"},
    {id:3,name:"Illia"},
    {id:3,name:"Hillarry"}
  ],
  messagesData: {
    newMessageText:"Pizdez vsem !!!",
    messages: [
        {message:'Hello my dear friend'},
        {message:'How are you?'},
        {message:'I am fine. And you?'},
        {message:'Me too.'},
        {message:'Gelll'}    
             ]  

  }  
 }
},
_callSubscruber () {
  console.log('11111');
},
getState() {
  return this._state ;
},

subscribe (observer) {
  this._callSubscruber=observer
},
dispatch (action) {
  this._state.postData = postReducer(this._state.postData,action);
  this._state.dialogMessageData = dialogReducer(this._state.dialogMessageData,action);
  this._callSubscruber(this._state)
    }
    
  }
 
export const addPostActionCreater =()=>({type:'ADD-POST'})

export const onPostChangeActionCreator=(newText)=>{
  return {type:'UPDATE-NEW-POST-TEXT', newText:newText }
}
export const addMessageActionCreater =()=>({type:'ADD-MESSAGE'})

export const onMessageChangeActionCreator=(newText)=>{
  return {type:'UPDATE-NEW-MESSAGE-TEXT', newText:newText }
}



export default store;
window.store=store;