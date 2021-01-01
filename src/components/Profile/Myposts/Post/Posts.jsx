import React from 'react';
import s from './Post.module.css'







const Post = (props) => {
      return (    
        <div className={s.item}>
              <div className={s.trel}>
              </div>
          <p>{"Post N"+props.number}</p>
              <div className={s.int}>{ props.message } </div>
              <div className={s.sum}>Кол-во лайков { props.likeSum }</div>
        </div>)
}


export default Post