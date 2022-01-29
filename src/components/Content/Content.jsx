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
                return <span key={g.objectid} className={styles.genealogyPart}
                  onClick={() => {this.props.handleGetChildren(g)}}>
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
                      return <li key={object.objectid} className={styles.card}>
                        <Card data={object} handleGetChildren={this.props.handleGetChildren} />
                      </li>
                    })
                  }
                </ul>
              </li>
            })
          }
        </ul>
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
      </>
    );
  }
}

export default Content;
