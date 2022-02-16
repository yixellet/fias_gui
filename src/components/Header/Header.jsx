import React from 'react';
import { Link } from 'react-router-dom';
import Switcher from './Switcher/Switcher';
import Searchbar from './Searchbar/Searchbar';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';

function Header(props) {

  return (
    <header className={styles.header}>
      <a href='https://cpapr.ru' target='_blank' rel="noopener noreferrer" 
        className={styles.logo_container}>
        <img className={styles.logo} src={logo} alt='Логотип ГАУ АО "ЦПАПР"' />
      </a>
      <div className={props.scrollY === 0 ? styles.contentContainer : styles.contentContainerHide}>
        <div className={styles.content}>
          <Link className={styles.title} to="/">Государственный адресный реестр</Link>
          <div className={styles.control}>
            <Searchbar 
              api={props.api} 
              mode={props.mode} />
            <Switcher 
              changeMode={props.handleChangeMode} 
              var1="Административное деление" 
              var2="Муниципальное деление" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
