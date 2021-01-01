import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (<header className={s.header}>
    <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt='sdf'/>
      <div className={s.inc}><p>Hello</p></div>
  </header>
    )
}



export default Header