import React from 'react';
import FilterForm from './FilterForm/FilterForm';
import Filter from './Filter/Filter';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <FilterForm api={this.props.api} 
          mode={this.props.mode}
          getData={this.props.getData} 
          setFetching={this.props.setFetching} 
          levels={this.props.levels} />
        {
          this.props.filters ?
          this.props.filters.map(block => {
            return <Filter name={block.name} 
              options={block.options} 
              fieldname={block.fieldname} />
          }) :
          null
        }
      </div>
    );
  }
}

export default Sidebar;
