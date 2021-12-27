import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import IsFetching from '../Content/IsFetching/IsFetching';
import Table from '../Content/Table/Table';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      level: 2,
      data: [],
      filters: null,
      levels: [],
      columns: [],
    }
    this.getData = this.getData.bind(this);
    this.setFetching = this.setFetching.bind(this);
  }

  componentDidMount() {
    this.props.api.getLevels()
      .then((data) => {
        this.setState({
          levels: data.data,
        })
      })
  }

  getData(data, level) {
    this.setState({
      data: data.data,
      filters: data.filter,
      columns: data.columns,
      level: level,
    })
  }

  setFetching(status) {
    this.setState({isFetching: status})
  }

  render() {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <Sidebar api={this.props.api} getData={this.getData} setFetching={this.setFetching} levels={this.state.levels} filters={this.state.filters} />
          <Content children={this.state.isFetching ? 
            <IsFetching /> : 
            <Table data={this.state.data} 
              columns={this.state.columns}
              toDMY={this.props.toDMY} /> } />
        </main>
      </>
    );
  }
}

export default App;
