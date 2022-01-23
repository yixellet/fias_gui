import React from 'react';
import Card from './Card/Card';
import styles from './Content.module.css';

class Content extends React.Component {

  render() {
    return (
      <article className={styles.container}>
        <div className={this.props.scrollY === 0 ? styles.genealogy : styles.genealogyFixed}>
        {
          this.props.genealogy &&
          this.props.genealogy.map((g, idx) => {
            return <h1 className={styles.genealogyTitle} key={g.objectid}
              onClick={() => {this.props.handleGetChildren(g.objectid)}}>
                {g.name} {g.typename.toLowerCase()}{idx!==this.props.genealogy.length-1 ? ', ' : ''}
                </h1>
          })
        }
        </div>
        <ul className={styles.levels}>
        {
          this.props.children.map((level) => {
            return <li key={level.level} id={level.level} className={styles.level}>{level.name}
              <ul className={styles.cards}>
                {
                  level.objects.map((object) => {
                    return <Card key={object.objectid} data={object} 
                    handleGetChildren={this.props.handleGetChildren} />
                  })
                }
              </ul>
            </li>
          })
        }
        </ul>
      </article>
    );
  }
}

export default Content;
