import React from 'react';
import Details from './Details/Details';
import styles from './Card.module.css';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className={styles.card}>
        <div className={styles.main}>
          <div className={styles.info}>
            <p className={styles.objectid}>{this.props.data.objectid}</p>
            <h1 className={styles.title}>{this.props.data.name} {this.props.data.typename}</h1>
            <p className={styles.text}>{this.props.data.parentname} {this.props.data.parenttypename}</p>
          </div>
          <button className={styles.button}>Дочерние элементы</button>
        </div>
        <Details />
      </section>
    );
  }
}

export default Card;
