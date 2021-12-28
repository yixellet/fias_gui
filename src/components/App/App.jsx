import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';

import styles from './App.module.css';

const ModeContext = React.createContext({
  mode: 'admDiv',
  toggleMode: () => {},
});
ModeContext.displayName = 'MyModeContext';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'adm_div',
      data: []
    };

    this.handleChangeMode = this.handleChangeMode.bind(this);
  }

  componentDidMount() {
    this.props.api.getAdmDistricts()
      .then((data) => {
        this.setState({ data: data.data })
      })
  }

  handleChangeMode(value) {
    this.setState({ mode: value })
  }

  render() {
    return (
      <ModeContext.Provider value={"admDiv"}>
        <Header api={this.props.api} handleChangeMode={this.handleChangeMode} />
        <main className={styles.container}>
          <Content api={this.props.api} mode={this.state.mode} data={this.state.data} />
        </main>
      </ModeContext.Provider>
    );
  }
}

export default App;
