import React from 'react';
import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <ul>
          <li>Район</li>
          <li>Город</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
