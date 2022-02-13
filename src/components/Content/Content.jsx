import React from 'react';
import Card from './Card/Card';
import styles from './Content.module.css';

class Content extends React.Component {

  render() {
    return (
      <>
        <ul className={styles.levels}>
          {
            this.props.children.map((level) => {
              return <li key={level.level} id={level.level} className={styles.level}>
                <h2 className={styles.levelName}>{level.name}</h2>
                <ul className={styles.cards}>
                  {
                    level.objects.map((object) => {
                      return <li key={object.objectid} className={styles.card}>
                        <Card data={object} mode={this.props.mode} />
                      </li>
                    })
                  }
                </ul>
              </li>
            })
          }
        </ul>
      </>
    );
  }
}

export default Content;
