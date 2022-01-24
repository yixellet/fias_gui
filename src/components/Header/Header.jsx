import React from 'react';
import Switcher from './Switcher/Switcher';
import Searchbar from './Searchbar/Searchbar';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';

class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <a href='https://cpapr.ru' target='_blank' rel="noopener noreferrer" 
          className={styles.logo_container}>
          <img className={styles.logo} src={logo} alt='Логотип ГАУ АО "ЦПАПР"' />
        </a>
        <div className={this.props.scrollY === 0 ? styles.contentContainer : styles.contentContainerHide}>
          <div className={styles.content}>
            <p className={styles.title}>Государственный адресный реестр</p>
            <div className={styles.control}>
              <Searchbar api={this.props.api} mode={this.props.mode} />
              <Switcher changeMode={this.props.handleChangeMode} var1="Административное деление" var2="Муниципальное деление" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
