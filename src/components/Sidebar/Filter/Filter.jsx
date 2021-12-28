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
<<<<<<< HEAD
          <legend className={styles.title}>{this.props.name}:</legend>
          {
            this.props.data.map((item) => {
              return (<CheckboxInput label={item.mun_name} id={item.mun_objectid} name='parent' />)
=======
          <legend className={styles.title}>{this.props.name}</legend>
          {
            this.props.options.map((option) => {
              return <CheckboxInput 
              key={option.mundistrid} 
              id={option.mundistrid} 
              label={option.mundistrname} 
              name={this.props.fieldname} />
>>>>>>> 2345a089c444f7f279fbd7d4a770252c2f8bba2a
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
