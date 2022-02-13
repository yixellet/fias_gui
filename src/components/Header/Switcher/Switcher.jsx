import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Switcher.module.css';

class Switcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVar1Active: true
    }
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch() {
    const isVar1Active = this.state.isVar1Active;
    this.setState({ isVar1Active: !isVar1Active })
    this.state.isVar1Active ? this.props.changeMode('mun_div') : this.props.changeMode('adm_div')
  }

  render() {
    const { isVar1Active } = this.state;
    return (
      <div className={styles.switcherContainer}>
        <div className={styles.wrapper}>
          <p className={isVar1Active ? `${styles.label} ${styles.label_active}` : `${styles.label} ${styles.label_inactive}`}>{this.props.var1}</p>
          <div className={isVar1Active ? `${styles.switcher} ${styles.switcher_left}` : `${styles.switcher} ${styles.switcher_right}`}>
            <Link to={`/`} className={isVar1Active ? `${styles.button} ${styles.button_left}` : `${styles.button} ${styles.button_right}`}
                onClick={this.handleSwitch} />
            </div>
          <p className={isVar1Active ? `${styles.label} ${styles.label_inactive}` : `${styles.label} ${styles.label_active}`}>{this.props.var2}</p>
        </div>
      </div>
    );
  }
}

export default Switcher;
