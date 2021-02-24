import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import IsFetching from '../Content/IsFetching/IsFetching';
import StreetTable from '../Content/StreetTable/StreetTable';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      level: 2,
      data: [],
    }
    this.getData = this.getData.bind(this);
    this.setFetching = this.setFetching.bind(this);
  }

  getData(data, level) {
    this.setState({
      data: data,
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
          <Content children={this.state.isFetching ? <IsFetching /> : <StreetTable data={this.state.data} />} />
        </main>
      </>
    );
  }
}

export default App;
