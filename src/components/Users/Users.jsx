import React from 'react';
import { followAC } from '../redux/usersReducer';
import styles from './Users.module.css';


let Users =(props)=> {
  if (props.setUsers.length===0){
      props.setUsers([
        {id:1,photoUrl:'http://avotarov.ru/picture/avatar-150/kartinki/875.jpg',folowed:false,fullName:"Dmitrii",status:"I am boss !!!",location:{country:"Belarus",city:"Minsk"}},
        {id:2,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:true,fullName:"Sergei",status:"Enything don't matter",location:{country:"Ukraine",city:"Kyiv"}},
        {id:3,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:false,fullName:"Pavel",status:"Hello world!!",location:{country:"Russian",city:"Gavnoevo"}},
        {id:4,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:true,fullName:"Illia",status:"Good by world !!!",location:{country:"China",city:"Gyanduan"}},
        {id:5,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/280px-Dmitry_Nagiev_2017_4.jpg',folowed:false,fullName:"Valia",status:"Who it cares !!",location:{country:"Moldova",city:"Benderi"}},
      ]
     );
    };
    return (
              props.users.map(u=><div key={u.id}>
                <div className={styles.imgPhoto}>
                  <img src={u.photoUrl} />
                </div>
                <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                 <div>
                   {u.location.city}
                 </div>
                 <div>
                   {u.location.country}
                 </div>
                </span>
                <div>
                  {u.folowed
                      ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                      :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
              </div>
              )
    )
};

export default Users;