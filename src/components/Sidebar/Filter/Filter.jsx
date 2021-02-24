import React from 'react';
import styles from '../FilterForm/FilterForm.module.css';

class Filter extends React.Component {
  render() {
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{this.props.name}Район:</legend>

        </fieldset>
        <div>
          <input type="submit" 
          className={styles.submit} 
          value="Применить"/>
        </div>
      </form>
    );
  }
}

export default Filter;
