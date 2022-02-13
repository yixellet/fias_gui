import React from 'react';
import styles from './Params.module.css';

class Params extends React.Component {

  render() {
    return (
      <div className={this.props.scrollY === 0 ? `${styles.info} ${styles.infoInitial}` : `${styles.info} ${styles.infoScroll}`}>
        <ul className={styles.paramsList}>
          {
            this.props.params &&
            this.props.params.map((param) => {
              return <li key={param.id} className={styles.paramItem}>
                <span className={styles.paramName}>{param.name}</span> {param.value}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Params;
