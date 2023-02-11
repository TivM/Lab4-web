import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from 'components/AppContainer';
import store from 'redux/store';
import 'styles/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );

  root.render(<Provider store={store}>
         <AppContainer />
       </Provider>)

// ReactDOM.render(
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>,
//   document.getElementById('root')
// );
