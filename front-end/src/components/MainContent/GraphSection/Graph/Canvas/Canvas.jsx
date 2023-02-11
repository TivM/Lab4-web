import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Canvas.module.css';

const Canvas = (props) => {
  return (
    //было 220 на 220 стало 300 на 300(тест)
    <canvas ref={props.canvasRef} styleName="canvas" width="300" height="300"
      onClick={props.handleClick !== undefined ? (e) => props.handleClick(props.canvasRef, e) : null}>
      {props.alt}
    </canvas>
  );
}

export default CSSModules(Canvas, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });