import React from 'react';
import styles from './CheckboxInput.module.css';

class CheckboxInput extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <input className={styles.input} type="checkbox" id={this.props.id} name={this.props.name} value={this.props.id} />
=======
        <input className={styles.input} type="radio" id={this.props.id} name={this.props.name} value={this.props.id} />
>>>>>>> 2345a089c444f7f279fbd7d4a770252c2f8bba2a
        <label className={styles.label} htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default CheckboxInput;
