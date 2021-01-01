const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState= {
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

 const dialogReducer = (state=initialState,action)=>{
   
     
     if (action.type===ADD_MESSAGE){
        let message={message:state.messagesData.newMessageText}
        
        state.messagesData.messages.push(message);
        state.messagesData.newMessageText="";
    } 
      else if (action.type===NEW_MESSAGE_TEXT){
       state.messagesData.newMessageText=action.newText;   
    }
   
    return state
}

export default dialogReducer