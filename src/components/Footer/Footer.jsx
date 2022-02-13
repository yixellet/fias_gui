import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {

  render() {
    return (
      <footer className={styles.footer}>
        <a className={styles.link} href='https://cpapr.ru' target='_blank' 
            rel="noopener noreferrer">ГАУ АО "ЦПАПР", 2022 г.</a>
      </footer>
    )
  }
}

export default Footer;
