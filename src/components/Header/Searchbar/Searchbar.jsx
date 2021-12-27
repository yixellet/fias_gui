import React from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {string: ''};
    this.results = []

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({string: event.target.value});
    this.props.api.liveSearch(event.target.value)
      .then((results) => {
        this.setState({
          results: results.data
        })
      })
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.string);
    event.preventDefault();
  }

  render() {
    return (
      <form className={styles.container} name="search" onSubmit={this.handleSubmit}>
        <div>
          <input className={styles.text} type="text" name="string" value={this.state.string} onChange={this.handleChange} />
          <input className={styles.submit} type="submit" value="S" />
        </div>
        {
          this.state.results &&
          <ul className={styles.results}>
            {
              this.state.results.map((result) => {
                return <li key={result.objectid}>{result.typename} {result.name}</li>
              })
            }
          </ul>
        }
      </form>
    );
  }
}

export default Searchbar;
