import React from 'react';
import FormContainer from './FormContainer/FormContainer';
import ViewForm from './ViewForm/ViewForm';
import FilterForm from './FilterForm/FilterForm';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <FormContainer children={<ViewForm />} name="Показать" onFormSubmit={this.props.onChooseLevel} />
        <FormContainer children={<FilterForm />} name="Фильтр" />
      </div>
    );
  }
}

export default Sidebar;
