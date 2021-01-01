const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  newPostText:"Putin bliad Huilo !!!",
  post: [
   {id:1,message:"hello , hi Zello!!!!!! ", number:1 , likeSum:3},
   {id:2,message:"trello trello moe ", number:2 , likeSum:9},
   {id:3,message:"PUTIN huyl ", number:3 , likeSum:6},
   {id:4,message:"treqwerwerwer", number:4 , likeSum:5},
   {id:5,message:"Vaino gavno", number:5 , likeSum:2}
 ]
};
const postReducer = (state=initialState,action)=> {
    if (action.type===ADD_POST){
        let newPost = {
          id:6,
          message:state.newPostText,
          number:6,
          likeSum:2
        }
        state.post.push(newPost);
        state.newPostText="";
    
      } 
        else if (action.type===NEW_POST_TEXT){
            state.newPostText=action.newText;
      }
    return state
}
export default postReducer