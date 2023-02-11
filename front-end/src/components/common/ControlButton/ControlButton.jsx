import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ControlButton.module.css';

const IndexContent = (props) => {
  return (
    <button styleName="control-button" className="theme" type="submit" onClick={props.action} id={props.text}>
      {props.text}
    </button>
  );
}

export default CSSModules(IndexContent, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
