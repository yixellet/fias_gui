import React from 'react';
import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <ul className={styles.list}>
          {
            this.props.levels &&
            this.props.levels.map((level) => {
              return <li key={level.level} className={styles.item}>
                <a className={styles.link} href={`#${level.level}`}>{level.name} ({level.objects.length})</a>
              </li>
            })
          }
        </ul>
      </nav>
    );
  }
}

export default Navigation;
