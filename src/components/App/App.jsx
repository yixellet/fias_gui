import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Search from '../Search/Search';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'adm_div',
      scrollY: 0,
    };

    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const position = window.pageYOffset;
    this.setState({ scrollY: position })
  }

  handleChangeMode(value) {
    this.setState({
      mode: value,
    })
  }

  render() {
    return (
      <>
        <Header mode={this.state.mode} 
                api={this.props.api}
                scrollY={this.state.scrollY}
                handleChangeMode={this.handleChangeMode}
                handleGetChildren={this.handleGetChildren} />
        <Routes>
          <Route path="/" element={<Navigate replace to={`/${this.state.mode}/454811`} />} />
          <Route path={`/${this.state.mode}/:objectid`} element={<Main api={this.props.api} mode={this.state.mode} scrollY={this.state.scrollY} />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
