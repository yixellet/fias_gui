import React from 'react';
import styles from './IsFetching.module.css';
import image from '../../../images/logo.svg';

class IsFetching extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="Wait" />
        <p className={styles.text}>ЗАГРУЗКА ДАННЫХ...</p>
      </div>
    );
  }
}

export default IsFetching;
