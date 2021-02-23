import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      data: [],
    }
    this.view = this.view.bind(this);
  }
  view(level) {
    this.setState({isFetching: true})
    this.props.api.getDistricts(level)
      .then((data) => {
        this.setState({
          data: data.data,
          isFetching: false,
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <Sidebar onChooseLevel={this.view} />
          <div>{this.state.data}</div>
        </main>
      </>
    );
  }
}

export default App;
