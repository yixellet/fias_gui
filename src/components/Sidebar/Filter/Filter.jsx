import React from 'react';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import styles from '../FilterForm/FilterForm.module.css';

class Filter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{this.props.name}</legend>
          {
            this.props.options.map((option) => {
              return <CheckboxInput 
              key={option.mundistrid} 
              id={option.mundistrid} 
              label={option.mundistrname} 
              name={this.props.fieldname} />
            })
          }
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
