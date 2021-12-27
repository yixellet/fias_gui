import React from 'react';
import FilterForm from './FilterForm/FilterForm';
import Filter from './Filter/Filter';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <FilterForm api={this.props.api} getData={this.props.getData} setFetching={this.props.setFetching} levels={this.props.levels} />
        {
          this.props.filters !== null ?
          (<Filter name={this.props.filters.name} data={this.props.filters.data} />) :
          null
        }
      </div>
    );
  }
}

export default Sidebar;
