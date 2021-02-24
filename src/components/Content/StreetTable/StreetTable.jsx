import React from 'react';
import styles from './StreetTable.module.css';

class StreetTable extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.data.map((item) => {
          return (<p key={item.objectid}>{item.name}</p>)
        })}
      </div>
    );
  }
}

export default StreetTable;
