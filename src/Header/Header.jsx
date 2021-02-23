import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Государственный адресный реестр</h1>
      </header>
    );
  }
}

export default Header;
