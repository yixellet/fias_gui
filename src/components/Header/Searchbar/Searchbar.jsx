import React from 'react';
import magnGlass from '../../../images/magnifying-glass.svg';
import styles from './Searchbar.module.css';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      results: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleChange(event) {
    this.setState({string: event.target.value});
    this.props.api.liveSearch(event.target.value, this.props.mode)
      .then((results) => {
        this.setState({
          results: results.data
        })
      })
  }

  handleChoose(result) {
    this.setState({
      string: result,
      results: [],
    });
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.string);
    event.preventDefault();
  }

  render() {
    return (
      <form className={styles.container} name="search" onSubmit={this.handleSubmit}>
        <div>
          <input className={styles.text} type="text" name="string" value={this.state.string} onChange={this.handleChange} autoComplete='off' />
          <button className={styles.submit}>
            <img className={styles.magn_glass} src={magnGlass} alt='Искать' />
          </button>
        </div>
        {
          this.state.results.length > 0 &&
          <ul className={styles.results}>
            {
              this.state.results.map((result) => {
                return <li className={styles.result} key={result.objectid}
                  onClick={() => this.handleChoose(result.name)}>
                  {result.typename} {result.name}
                </li>
              })
            }
          </ul>
        }
      </form>
    );
  }
}

export default Searchbar;
