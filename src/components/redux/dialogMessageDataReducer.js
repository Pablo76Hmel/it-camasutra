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
  };

 const dialogReducer = (state=initialState,action)=>{
  let stateCopy;   
  switch (action.type){
      case ADD_MESSAGE: {
        stateCopy={...state,
          };
        stateCopy.messagesData.messages=[...state.messagesData.messages,
          {message:stateCopy.messagesData.newMessageText}];

        stateCopy.messagesData.newMessageText="";
        return stateCopy;
      } 
      case NEW_MESSAGE_TEXT: {
          stateCopy={...state,
        };
        // stateCopy.messagesData={...state.messagesData};
         stateCopy.messagesData.newMessageText=action.newText;   
        return stateCopy;
      }
      default:
        return state;
  }
}
export default dialogReducer