import React, { useRef, useEffect} from 'react';
//import { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Select.module.css';
//import GraphSvg from './GraphsPlusR/GraphSvg';
//import FormButton from 'components/MainContent/ValuesSection/ValuesForm/FormButtonGroup/FormButton/FormButton';
import Select from 'react-select';


const SelectElement = (props) => {

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]
    
    const options = [];

     props.users.map((user) => {
         options.push({value: user, label: user});
       });

    const show = (value) => {
        alert(value.value);
    }

    //useEffect(() => {});


    return(
        <Select placeholder="Select user..." 
        options={options}
        onChange = {(val) => show(val)}
        />
      );
}

export default CSSModules(SelectElement, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });