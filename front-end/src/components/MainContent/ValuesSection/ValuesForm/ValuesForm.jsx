import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ValuesForm.module.css';
import ControlButton from 'components/common/ControlButton/ControlButton';
import InfoMessage from './InfoMessage/InfoMessage';
import FormButtonGroup from './FormButtonGroup/FormButtonGroup';
import TextField from './TextField/TextField';
import FormButtonGroupX from './FormButtonGroup/FormButtonGroupX';
import {hitCheck} from "../../GraphSection/HitCheck";

const CHECK = 'check';
const CLEAR = 'clear';

const validateForm = values => { // Поправить валидацию с учётом того, что rCurrent и xCurrent - числа
  let isNumeric = num => {
    for (let i = 0; i<num.length; i++){
      if(!(!isNaN(parseFloat(num[i])) && isFinite(num[i]))){
        return false;
      }
    }
    return true;
  }

  if (!isNumeric(values.rCurrent) || !values.rValues.includes(parseFloat(values.rCurrent))) {
    return 'Выберите значение R!';
  }

  if (!isNumeric(values.xCurrent) || !values.xValues.includes(parseFloat(values.xCurrent))) {
    return 'Выберите значение X!';
  }

  if (!isNumeric([values.yCurrent]) || values.yCurrent < values.yMin || values.yCurrent > values.yMax) {
    return `Введите значение Y от ${values.yMin} до ${values.yMax}!`;
  }

  return '';
}

const ValuesForm = (props) => {
  const [infoMessage, setInfoMessage] = useState('Введите координаты точки');
  const [action, setAction] = useState(undefined);

  //alert(props.xValues);
  //alert(props.users);

  const handleCheckCLick = () => {
    setAction(CHECK);
  }

  const handleClearCLick = () => {
    setAction(CLEAR);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (action) {
      case CHECK:
        let message = validateForm(props);
        if (message === '') {
          for (let i = 0; i < props.xCurrent.length; i++) {
            for (let j = 0; j < props.rCurrent.length; j++) {
              props.addEntry({x:props.xCurrent[i], y:props.yCurrent, r:props.rCurrent[j], status:hitCheck(props.xCurrent[i],props.yCurrent,props.rCurrent[j])});
            }
          }
          props.checkEntry();
        }
        break;
      case CLEAR:
        props.clearEntries();
        break;
      default:
        alert('Неверный Action в ValuesForm!');
    }
  }

  useEffect(() => {
    let message = validateForm(props);
    setInfoMessage(message === '' ? 'Введите координаты точки' : message);
  }, [props]);

 // const [checked, setChecked] = useState(false);

  //const ref = useRef(null);

  // let message;
  // let mas = [];
	// if ((checked)){
  //   message = props.value;
  //   mas.push(props.value);
	// }
  // else {
	// 	message = 0;
	// }

  // console.log("mas:" + mas);
  //alert(props.xCurrent);

  return (
    <form styleName="values-form" onSubmit={(e) => handleSubmit(e)}>
      <InfoMessage message={infoMessage} />

      <div styleName="values-form__container">
        <label styleName="values-form__label" className="theme">
          <span className="values-form__label-text">
            R
          </span>
        </label>
        {/* <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}
          onClick={() => props.selectValue(1)} value = {1} groupValues={props.rValues} valueCurrent={props.rCurrent}
          selectValue={props.selectR}/>
		    <div id = 'message'>{message}</div> */}
        <div styleName="values-form__control">
          <FormButtonGroup groupValues={props.rValues} valueCurrent={props.rCurrent} selectValue={props.selectR}/>
        </div>

      </div>

      <div styleName="values-form__container">
        <label styleName="values-form__label" className="theme">
          <span className="values-form__label-text">
            X
          </span>
        </label>
        <div styleName="values-form__control">
          <FormButtonGroupX groupValues={props.xValues} valueCurrent={props.xCurrent} selectValue={props.selectX} />
        </div>
      </div>

      <div styleName="values-form__container">
        <label styleName="values-form__label" htmlFor="y-text" className="theme">
          <span className="values-form__label-text">
            Y
          </span>
        </label>
        <div styleName="values-form__control">
          <TextField value={props.yCurrent} changeValue={props.changeY} maxLength="7" placeholder="Число от -5 до 5" />
        </div>
      </div>

      <div styleName="values-form__control-container">
        <ControlButton text="Проверить" action={handleCheckCLick} />
        {/*<ControlButton text="Очистить" action={handleClearCLick} />*/}
      </div>2
    </form>
  );
}

export default CSSModules(ValuesForm, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
