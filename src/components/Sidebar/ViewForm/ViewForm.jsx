import React from 'react';
import Input from './Input/Input';

class ViewForm extends React.Component {
  render() {
    return (
      <>
        <Input id="2" name="Районы" />
        <Input id="5 6" name="Населенные пункты" />
        <Input id="7" name="Территории" />
        <Input id="8" name="Улицы" />
        <Input id="9" name="Земельные участки" />
        <Input id="10" name="Здания" />
        <Input id="11" name="Помещения" />
        <Input id="12" name="Комнаты" />
      </>
    );
  }
}

export default ViewForm;
