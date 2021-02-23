import React from 'react';
import Input from './Input/Input';

class Filter extends React.Component {
  render() {
    return (
      <details>
        <summary>{this.props.name}</summary>
        {
          this.props.items.map((item, index) => {
            return (<Input key={index} id={item.id} name={item.name} />)
          })
        }
      </details>
    );
  }
}

export default Filter;
