import React from 'react';
import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <ul>
          {
            this.props.levels &&
            this.props.levels.map((level) => {
              return <li key={level.level}><a href={`#${level.level}`}>{level.name}</a></li>
            })
          }
        </ul>
      </nav>
    );
  }
}

export default Navigation;
