import React from 'react';
import FilterForm from './FilterForm/FilterForm';
// import Filter from './Filter/Filter';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {

  render() {
    console.log(this.props.data)
    return (
      <div className={styles.container}>
        <FilterForm api={this.props.api} getData={this.props.getData} setFetching={this.props.setFetching} levels={this.props.levels} />
        {
          'filter' in this.props.data ?
          <p>RRRRRRRRR</p> :
          <p>QQQQQQQQQQ</p>
        }
      </div>
    );
  }
}

export default Sidebar;
