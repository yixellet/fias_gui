import React from 'react';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import styles from '../FilterForm/FilterForm.module.css';

class Filter extends React.Component {
  render() {
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{this.props.name}:</legend>
          {
            this.props.data.map((item) => {
              return (<CheckboxInput label={item.mun_name} id={item.mun_objectid} name='parent' />)
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
