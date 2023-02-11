import React from "react";
import CSSModules from 'react-css-modules';
import styles from './Header.module.css';
import Logout from './Logout/Logout';

const Header = (props) => {
    const handleLogout = (e) => {
      e.preventDefault();
      props.logout();
    }
    
    return (
      <header styleName="main-header" className="theme">
        {/* {props.loggedUser && <Logout action={handleLogout} />} */}
        {<Logout action={handleLogout} />}
        <ul styleName="main-header__content info">
          <li styleName="info__item">Лабораторная работа №4</li>
          <li styleName="info__item">Вариант: 910008</li>
        </ul>
        <ul styleName="main-header__content authors">
          <li styleName="authors__item">Константин Шпренгер (P32091)</li>
          <li styleName="authors__item">Трофимченко Владислав (P32111)</li>
        </ul>
      </header>
    );
  }
  
  export default CSSModules(Header, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
 