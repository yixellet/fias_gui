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
  }

  handleInputChange(event) {
    
    this.setState({
      level: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setFetching(true);
    if (['1', '2', '3', '4', '5', '6', '7', '8', '8'].indexOf(this.state.level) !== -1) {
      this.props.api.getDistricts(this.state.level)
        .then((data) => {
          this.props.getData(data.data, this.state.level)
          this.props.setFetching(false)
        })
    } else if (this.state.level === '9') {
      this.props.api.getSteads()
        .then((data) => {
          this.props.getData(data.data, this.state.level)
          this.props.setFetching(false)
      })
    }
  }

  render() {
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{this.props.name}Показать:</legend>
          {
            this.props.levels.map((level) => {
              return (<RadioInput id={level.level} label={level.name} onInputChange={this.handleInputChange} key={level.level} />)
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
