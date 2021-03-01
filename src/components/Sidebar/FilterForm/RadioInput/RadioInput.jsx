import React from 'react';
import styles from './RadioInput.module.css';

class RadioInput extends React.Component {
  render() {
    return (
        <div>
          <input onChange={this.props.onInputChange}
          className={styles.input} 
          type="radio"
          id={this.props.id} 
          name='viewfilter' 
          value={this.props.id} />
          <label className={styles.label} 
          htmlFor={this.props.id}>{this.props.label}</label>
        </div>
    );
  }
}

export default RadioInput;
