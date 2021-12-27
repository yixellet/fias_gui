import React from 'react';
import styles from './Table.module.css';

class Table extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.head}>
            <tr className={styles.headrow}>
              {
                this.props.columns.map((column) => {
                  return <th key={column} className={styles.headcell}>{column}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.data ?
              this.props.data.map((row, index) => {
                return (
                  <tr key={index} className={styles.row}>
                    {
                      Object.entries(row).map((pair, index) => {
                        return <td key={index} className={styles.cell}>{pair[0].includes('date') ? this.props.toDMY(pair[1]) : pair[1]}</td>
                      })
                    }
                  </tr>
                )
              }) :
              null
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
