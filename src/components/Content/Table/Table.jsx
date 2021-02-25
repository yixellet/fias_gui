import React from 'react';
import styles from './Table.module.css';

class Table extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              {
                this.props.columns.map((column) => {
                  return <th key={column}>{column}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map((row, index) => {
                return (
                  <tr key={index}>
                    {
                      Object.values(row).map((item, index) => {
                        return <td key={index}>{item}</td>
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
