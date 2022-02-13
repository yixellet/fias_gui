import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Parents.module.css';

class Parents extends React.Component {

  render() {
    return (
      <div className={this.props.scrollY === 0 ? `${styles.parents} ${styles.parentsNoScroll}` : `${styles.parents} ${styles.parentsScroll}`}>
        <h1 className={styles.parentsTitle}>
          {
            this.props.parents ?
            this.props.parents.map((g, idx) => {
              return <Link to={`/${this.props.mode}/${g.objectid}`} key={g.objectid} className={styles.parentsPart}>
                  {g.name} {g.typename.toLowerCase()}{idx!==this.props.parents.length-1 ? ', ' : ''}
                  </Link>
            }) : 'Результаты поиска'
          }
        </h1>
      </div>
    );
  }
}

export default Parents;