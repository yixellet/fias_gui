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
      currentObject: {'objectid': 454811, 'level': '1', 'name': 'Астраханская', 'typename': 'обл'},
      currentObjectParams: [],
      currentObjectGen: [],
      currentObjectChildren: [],
      levels: [],
      scrollY: 0,
    };

    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleGenealogy = this.handleGenealogy.bind(this);
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
    this.handleGetChildren(this.state.currentObject)
    window.addEventListener('scroll', this.handleScroll);
  }

  handleChangeMode(value) {
    this.setState({ 
      mode: value,
      currentObject: []
    })
    this.props.api.getChildren(454811, value)
      .then((data) => {
        this.setState({
          currentObjectChildren: splitByLevels(data.children, this.state.levels),
          currentObjectGen: [{'objectid': 454811, 'level': '1', 'name': 'Астраханская', 'typename': 'обл'}]
        })
      })
    this.props.api.getParams(454811)
      .then((data) => {
        this.setState({ currentObjectParams: data.params })
      })
  }

  handleGenealogy(object) {
    const genIDs = this.state.currentObjectGen.map((obj) => {
      return obj.objectid
    })
    const bool = genIDs.find((objectid) => {
      return objectid === object.objectid
    })
    if (bool) {
      const idx = genIDs.indexOf(bool)
      const newGen = this.state.currentObjectGen.slice(0, idx+1)
      this.setState({currentObjectGen: newGen})
    } else {
      this.setState((state, props) => ({currentObjectGen: state.currentObjectGen.concat(object)}))
    }
  }

  handleGetChildren(object) {
    this.handleGenealogy(object)
    this.setState({ currentObject: object})
    this.props.api.getParams(object.objectid)
      .then((data) => {
        this.setState({ currentObjectParams: data.params })
      })
    if (object.level === '10') {
      this.props.api.getHouseChildren(object.objectid)
        .then((data) => {
          this.setState({
            currentObjectChildren: splitByLevels(data.children, this.state.levels),
          })
        })
    } else if (object.level === '11') {
      this.props.api.getRooms(object.objectid)
        .then((data) => {
          this.setState({
            currentObjectChildren: splitByLevels(data.children, this.state.levels),
          })
        })
    } else {
      this.props.api.getChildren(object.objectid, this.state.mode, object.level)
        .then((data) => {
          this.setState({
            currentObjectChildren: splitByLevels(data.children, this.state.levels),
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
              scrollY={this.state.scrollY}
              params={this.state.currentObjectParams} />
          }
          <Navigation levels={this.state.currentObjectChildren}
            scrollY={this.state.scrollY} />
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
                      this.handleGetChildren(this.state.currentObjectGen[this.state.currentObjectGen.length - 2])
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
