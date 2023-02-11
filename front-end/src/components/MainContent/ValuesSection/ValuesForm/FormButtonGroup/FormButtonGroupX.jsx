import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './FormButtonGroup.module.css';
//import FormButton from './FormButton/FormButton';
import FormButtonX from './FormButton/FormButtonX';

const FormButtonGroupX = (props) => {
  return (
    <ul styleName="button-list">
      {props.groupValues.map(value => <li key={value} styleName="button-list__item">
        <FormButtonX value={value} valueCurrent={props.valueCurrent} selectValue={props.selectValue}/>
      </li>)}
    </ul>
  );
}

export default CSSModules(FormButtonGroupX, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
