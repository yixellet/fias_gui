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
      columns: [],
    }
    this.getData = this.getData.bind(this);
    this.setFetching = this.setFetching.bind(this);
  }

  getData(data, level) {
    this.setState({
      data: data,
      columns: Object.keys(data[0]),
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
          <Sidebar api={this.props.api} getData={this.getData} setFetching={this.setFetching} level={this.state.level} />
          <Content children={this.state.isFetching ? <IsFetching /> : (this.state.data ? <Table data={this.state.data} columns={this.state.columns} /> : null)} />
        </main>
      </>
    );
  }
}

export default App;
