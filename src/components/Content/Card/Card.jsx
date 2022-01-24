import React from 'react';
import styles from './Card.module.css';

class Card extends React.Component {
  render() {
    return (
      <article onClick={() => this.props.handleGetChildren(this.props.data.objectid, this.props.data.level)} 
               className={styles.cardContainer}>
        <div className={styles.main}>
          <p className={styles.objectid}>{this.props.data.objectid}</p>
          <h3 className={styles.title}>{this.props.data.name} <span className={styles.typeName}>{this.props.data.typename.toLowerCase()}</span></h3>
          <p className={styles.objectid}>Дочерних элементов: <span className={styles.count}>{this.props.data.children}</span></p>
        </div>
      </article>
    );
  }
}

export default Card;
