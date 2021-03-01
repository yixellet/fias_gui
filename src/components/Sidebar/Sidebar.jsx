import React from 'react';
import FilterForm from './FilterForm/FilterForm';
// import Filter from './Filter/Filter';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <FilterForm api={this.props.api} getData={this.props.getData} setFetching={this.props.setFetching} levels={this.props.levels} />
      </div>
    );
  }
}

export default Sidebar;
