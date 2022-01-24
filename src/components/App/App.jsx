import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Content from '../Content/Content';

import splitByLevels from '../../utils/splitByLevels';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'adm_div',
      currentObject: {'id': 454811, 'level': '1'},
      currentObjectGen: [],
      currentObjectChildren: [],
      levels: [],
      scrollY: 0,
    };

    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleGetChildren = this.handleGetChildren.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const position = window.pageYOffset;
    this.setState({ scrollY: position })
  }

  componentDidMount() {
    this.props.api.getLevels()
      .then((levels) => {
        this.setState({ levels: levels.data })
      })
    this.handleGetChildren(this.state.currentObject.id, this.state.currentObject.level)
    window.addEventListener('scroll', this.handleScroll);
  }

  handleChangeMode(value) {
    this.setState({ 
      mode: value,
      currentObject: {'id': 454811, 'level': '1'}
    })
    this.props.api.getChildren(454811, value)
      .then((data) => {
        this.setState({
          currentObjectChildren: splitByLevels(data.children, this.state.levels),
          currentObjectGen: data.genealogy
        })
      })
  }

  handleGetChildren(objectid, level) {
    const currentObject = {'id': objectid, 'level': level}
    this.setState({ currentObject: currentObject})
    if (level === 10) {
      this.props.api.getHouseChildren(objectid)
        .then((data) => {
          this.setState({
            currentObjectChildren: splitByLevels(data.children, this.state.levels),
            currentObjectGen: data.genealogy
          })
        })
    } else if (level === 11) {
      this.props.api.getRooms(objectid)
        .then((data) => {
          this.setState({
            currentObjectChildren: splitByLevels(data.children, this.state.levels),
            currentObjectGen: data.genealogy
          })
        })
    } else {
      this.props.api.getChildren(objectid, this.state.mode, level)
        .then((data) => {
          this.setState({
            currentObjectChildren: splitByLevels(data.children, this.state.levels),
            currentObjectGen: data.genealogy
          })
        })
    }
  }

  render() {
    return (
      <>
        <Header api={this.props.api} 
                handleChangeMode={this.handleChangeMode} 
                mode={this.state.mode} 
                scrollY={this.state.scrollY} />
        <main className={styles.container}>
          {
            this.state.currentObjectChildren &&
            <Content api={this.props.api} 
              mode={this.state.mode} 
              children={this.state.currentObjectChildren}
              genealogy={this.state.currentObjectGen}
              handleGetChildren={this.handleGetChildren}
              scrollY={this.state.scrollY} />
          }
          <Navigation levels={this.state.currentObjectChildren} />
          <aside className={styles.arrowsContainer}>
            <a className={`${styles.button} ${styles.topButton}`} href='#top'>
              <svg className={`${styles.svg} ${styles.svgTop}`} viewBox="0 0 1.32 2.157" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.svgBackPath} d="m1.49.467-1.036.982 1.036.982" transform="translate(-.261 -.37)"/>
              </svg>
              <p className={styles.backText}>Наверх</p>
            </a>
            <button className={`${styles.button} ${styles.backButton}`}
                    onClick={() => {
                      this.state.currentObject.level !== '1' &&
                      this.handleGetChildren(this.state.currentObjectGen[this.state.currentObjectGen.length - 2].objectid, this.state.currentObjectGen[this.state.currentObjectGen.length - 2].level)
                    }}>
              <svg className={styles.svg} viewBox="0 0 1.32 2.157" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.svgBackPath} d="m1.49.467-1.036.982 1.036.982" transform="translate(-.261 -.37)"/>
              </svg>
              <p className={styles.backText}>Назад</p>
            </button>
          </aside>
        </main>
        <footer className={styles.footer}>
          <a className={styles.link} href='https://cpapr.ru' target='_blank' rel="noopener noreferrer">ГАУ АО "ЦПАПР", 2022 г.</a>
        </footer>
      </>
    );
  }
}

export default App;
