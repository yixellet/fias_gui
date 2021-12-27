import React from 'react';
import Switcher from './Switcher/Switcher';
import Searchbar from './Searchbar/Searchbar';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Государственный адресный реестр</h1>
        <div className={styles.control}>
          <Searchbar api={this.props.api} />
          <Switcher changeMode={this.props.handleChangeMode} var1="Административное деление" var2="Муниципальное деление" />
        </div>
      </header>
    );
  }
}

export default Header;
