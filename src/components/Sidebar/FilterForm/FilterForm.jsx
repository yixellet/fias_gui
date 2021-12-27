import React from 'react';
import RadioInput from './RadioInput/RadioInput';
import styles from './FilterForm.module.css';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 2,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.whatToDoWithData = this.whatToDoWithData.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      level: event.target.value,
    })
  }

  whatToDoWithData(data) {
    this.props.getData(data.data, data.filters, this.state.level)
    this.props.setFetching(false)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setFetching(true);
    switch (this.state.level) {
      case '2':
        this.props.api.getAdmDistricts()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '3':
        this.props.api.getMunDistricts()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '4':
        this.props.api.getMunStructures()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '5':
        this.props.api.getCities()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '6':
        this.props.api.getSettles()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '7':
        this.props.api.getTerritories()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '8':
        this.props.api.getStreets()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '9':
        this.props.api.getSteads()
          .then((data) => this.whatToDoWithData(data))
        break;
      case '10':
        this.props.api.getHouses()
          .then((data) => this.whatToDoWithData(data))
        break;
      default:
        break;
    }
  }

  render() {
    const leftLevel = this.props.mode === 'adm_div' ? 3 : 2
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{this.props.name}Показать:</legend>
          {
            this.props.levels.slice(1, 6).map((level) => {
              if (level.level !== leftLevel) {
                return (<RadioInput data={level} 
                  onInputChange={this.handleInputChange} 
                  key={level.level} />)
              }
              return null
            })
          }
        </fieldset>
        <div>
          <input type="submit" 
          className={styles.submit} 
          value="Применить"/>
        </div>
      </form>
    );
  }
}

export default FormContainer;
