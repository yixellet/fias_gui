import React from 'react';
import Filter from './Filter/Filter';

class FilterForm extends React.Component {
  render() {
    return (
      <>
        <Filter name="Населенные пункты" 
        items={
          [
            {name: 'Ахтубинск', id: 'akhtubinsk'}, 
            {name: 'Болхуны', id: 'bolhuny'}, 
            {name: 'Успенка', id: 'uspenka'}
            ]
        } />
        <Filter name="Улицы" 
        items={
          [
            {name: 'Ленина', id: 'lenina'}, 
            {name: '1 Мая', id: 'first-of-may'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}, 
            {name: 'Строителей', id: 'stroiteley'}
            ]
        } />
      </>
    );
  }
}

export default FilterForm;
