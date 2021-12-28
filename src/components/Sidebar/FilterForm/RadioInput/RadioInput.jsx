import React from 'react';
import styles from './RadioInput.module.css';

class RadioInput extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <input onChange={this.props.onInputChange}
            className={styles.input} 
            type="radio"
            id={this.props.data.id} 
            name='viewfilter' 
            value={this.props.data.id} />

          <label className={styles.label} 
            htmlFor={this.props.data.id}>{this.props.data.name}</label>
        </div>
    );
  }
}

export default RadioInput;
