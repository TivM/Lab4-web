import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SelectSection.module.css';
import sharedStyles from '../main.module.css';
import SelectContainer from './Select/SelectContainer';

const SelectSection = (props) => {
  return (
      <SelectContainer/>
  );
}

export default CSSModules(SelectSection, { ...styles, ...sharedStyles }, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });