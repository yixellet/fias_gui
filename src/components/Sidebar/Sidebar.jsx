import React from 'react';
import FilterForm from './FilterForm/FilterForm';
import Filter from './Filter/Filter';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <FilterForm api={this.props.api} getData={this.props.getData} setFetching={this.props.setFetching} />
        {
          this.props.level === '4' || this.props.level === '5' || this.props.level === '6' ?
          <Filter /> :
          null
        }
      </div>
    );
  }
}

export default Sidebar;
