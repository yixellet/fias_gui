import React from 'react';
import Card from './Card/Card';
import styles from './Content.module.css';

class Content extends React.Component {

  render() {
    return (
      <>
        <div className={this.props.scrollY === 0 ? styles.genealogy : styles.genealogyFixed}>
          <h1 className={styles.genealogyTitle}>
            {
              this.props.genealogy &&
              this.props.genealogy.map((g, idx) => {
                return <span key={g.objectid}
                  onClick={() => {this.props.handleGetChildren(g.objectid, g.level)}}>
                    {g.name} {g.typename.toLowerCase()}{idx!==this.props.genealogy.length-1 ? ', ' : ''}
                    </span>
              })
            }
          </h1>
        </div>
        <ul className={styles.levels}>
          {
            this.props.children.map((level) => {
              return <li key={level.level} id={level.level} className={styles.level}>
                <h2 className={styles.levelName}>{level.name}</h2>
                <ul className={styles.cards}>
                  {
                    level.objects.map((object) => {
                      return <li key={object.objectid} className={styles.card}><Card data={object} 
                      handleGetChildren={this.props.handleGetChildren} /></li>
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
