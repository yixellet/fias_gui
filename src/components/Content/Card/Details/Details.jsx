import React from 'react';
import styles from './Details.module.css';

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.container}>        
        <div className={styles.tabs}>
          <button className={styles.tab}>Подробно</button>
          <button className={styles.tab}>История</button>
        </div>
        <div className={styles.info}></div>
      </div>
    );
  }
}

export default Details;
