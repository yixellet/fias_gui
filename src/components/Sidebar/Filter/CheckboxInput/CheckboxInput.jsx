import React from 'react';
import styles from './CheckboxInput.module.css';

class CheckboxInput extends React.Component {
  render() {
    return (
      <div>
        <input className={styles.input} type="checkbox" id={this.props.id} name={this.props.id} value={this.props.id} />
        <label className={styles.label} htmlFor={this.props.id}>{this.props.name}</label>
      </div>
    );
  }
}

export default CheckboxInput;
