import React from 'react';
import styles from './Card.module.css';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section onClick={() => this.props.handleGetChildren(this.props.data.objectid, this.props.data.level)} className={styles.card}>
        <div className={styles.main}>
          <div className={styles.info}>
            <p className={styles.objectid}>{this.props.data.objectid}</p>
            <h1 className={styles.title}>{this.props.data.name} <span className={styles.typeName}>{this.props.data.typename.toLowerCase()}</span></h1>
            <p className={styles.objectid}>Дочерних элементов: <span className={styles.count}>{this.props.data.children}</span></p>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
