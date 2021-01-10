const FOLLOW='FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
let initialState = {
  users:[
   {id:1,photoUrl:'http://avotarov.ru/picture/avatar-150/kartinki/875.jpg',folowed:false,fullName:"Dmitrii",status:"I am boss !!!",location:{country:"Belarus",city:"Minsk"}},
   {id:2,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:true,fullName:"Sergei",status:"Enything don't matter",location:{country:"Ukraine",city:"Kyiv"}},
   {id:3,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:false,fullName:"Pavel",status:"Hello world!!",location:{country:"Russian",city:"Gavnoevo"}},
   {id:4,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:true,fullName:"Illia",status:"Good by world !!!",location:{country:"China",city:"Gyanduan"}},
   {id:5,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:false,fullName:"Valia",status:"Who it cares !!",location:{country:"Moldova",city:"Benderi"}},
 ]
};


 const usersReducer = (state=initialState,action)=>{

  switch (action.type){
      case FOLLOW :
            return {
              ...state,
              users:state.users.map(u =>{
                  if (u.id===action.userId){
                    return {...u , folowed:true
                    }
                  }
                return u
              })
            }
    
      case UNFOLLOW :
            return {
              ...state,
              users:state.users.map(u =>{
                  if (u.id===action.userId){
                    return {...u , folowed:false}
                  }
              return u
            })
      };
      default:
      return state;
  }
}
export const followAC =(userId)=>({type:FOLLOW,userId});
export const unfollowAC=(userId)=>({type:UNFOLLOW,userId});
export const setUsersAC=(users)=>({type:SET_USERS,users});
export default usersReducer