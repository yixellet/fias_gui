import React from 'react';
import Input from './Input/Input';

class ViewForm extends React.Component {
  render() {
    return (
      <>
        <Input id="districts" name="Районы" />
        <Input id="settlements" name="Населенные пункты" />
        <Input id="territories" name="Территории" />
        <Input id="streets" name="Улицы" />
        <Input id="steads" name="Земельные участки" />
        <Input id="houses" name="Здания" />
        <Input id="apartments" name="Помещения" />
        <Input id="rooms" name="Комнаты" />
      </>
    );
  }
}

export default ViewForm;
