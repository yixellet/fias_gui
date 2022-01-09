import React from 'react';
import Card from './Card/Card';
import styles from './Content.module.css';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <article className={styles.container}>
        <div className={styles.genealogy}>
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
        {
          this.props.children &&
          this.props.children.map((d) => {
            return <Card api={this.props.api} 
              key={d.objectid} data={d} mode={this.props.mode}
              handleGetChildren={this.props.handleGetChildren} />
          })
        }
      </article>
    );
  }
}

export default Content;
