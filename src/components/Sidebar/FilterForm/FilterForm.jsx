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
    this.props.api.getDistricts(this.state.level)
      .then((data) => {
        this.props.getData(data.data, this.state.level)
        this.props.setFetching(false)
      })
  }

  render() {
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{this.props.name}Показать:</legend>
          <RadioInput id="2" label="Районы" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="4" label="Муниципальные образования" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="5" label="Города" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="6" label="Прочие населенные пункты" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="7" label="Территории" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="8" label="Улицы" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="9" label="Земельные участки" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="10" label="Здания" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="11" label="Помещения" name="level" onInputChange={this.handleInputChange} />
          <RadioInput id="12" label="Комнаты" name="level" onInputChange={this.handleInputChange} />
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
