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
        {
          this.props.data ?
          this.props.data.map((d) => {
            return <Card key={d.objectid} data={d} />
          }) :
          null
        }
      </article>
    );
  }
}

export default Content;
