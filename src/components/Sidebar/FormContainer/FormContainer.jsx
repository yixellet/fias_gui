import React from 'react';
import styles from './FormContainer.module.css';

class FormContainer extends React.Component {
  render() {
    return (
      <form className={styles.container}>
        <h3 className={styles.title}>{this.props.name}:</h3>
        {this.props.children}
        <div>
          <input type="submit" 
          className={styles.submit} 
          value="Применить"/>
        </div>
      </form>
    );
  }
}

export default FormContainer;
