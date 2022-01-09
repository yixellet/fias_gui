import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Content from '../Content/Content';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'adm_div',
      data: []
    };

    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleGetChildren = this.handleGetChildren.bind(this);
  }

  componentDidMount() {
    this.props.api.getChildren(454811, this.state.mode)
      .then((data) => {
        this.setState({ data: data })
      })
  }

  handleChangeMode(value) {
    this.setState({ mode: value })
    this.props.api.getChildren(454811, value)
      .then((data) => {
        this.setState({ data: data })
      })
  }

  handleGetChildren(objectid, level) {
    if (level === '10') {
      this.props.api.getHouseChildren(objectid)
        .then((data) => {
          this.setState({ data: data })
        })
    } else if (level === 11) {
      this.props.api.getRooms(objectid)
        .then((data) => {
          this.setState({ data: data })
        })
    } else {
      this.props.api.getChildren(objectid, this.state.mode, level)
        .then((data) => {
          this.setState({ data: data })
        })
    }
  }

  render() {
    return (
      <>
        <Header api={this.props.api} handleChangeMode={this.handleChangeMode} mode={this.state.mode} />
        <main className={styles.container}>
          {
            this.state.data &&
            <Content api={this.props.api} 
              mode={this.state.mode} 
              children={this.state.data.children}
              genealogy={this.state.data.genealogy}
              handleGetChildren={this.handleGetChildren} />
          }
          <Navigation />
        </main>
        <div className={styles.back} onClick={() => {this.handleGetChildren(this.state.data.genealogy[this.state.data.genealogy.length - 2].objectid)}}>
          <svg className={styles.svgBack} viewBox="0 0 1.32 2.157" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.svgBackPath} d="m1.49.467-1.036.982 1.036.982" transform="translate(-.261 -.37)"/>
          </svg>
          <p className={styles.backText}>Назад</p>
        </div>
      </>
    );
  }
}

export default App;
