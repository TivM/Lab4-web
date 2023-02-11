import entryAPI from 'api/entryAPI';
import usersAPI from 'api/usersAPI';
import { logout } from './auth';
import { setEntries, addEntry } from './table';

const SELECT_R = 'lab4/values/SELECT_R';
const SELECT_X = 'lab4/values/SELECT_X';
const CHANGE_Y = 'lab4/values/CHANGE_Y';
const CHANGE_MES = 'lab4/values/CHANGE_MES';
const CLEAR_CURRENT = 'lab4/values/CLEAR_CURRENT';
const SET_USERS = 'lab4/table/SET_USERS';

const initialState = {
  rValues: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
  rCurrent: [],
  xValues: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
  xCurrent: [],
  yMin: -5,
  yMax: 5,
  yCurrent: undefined,
  users: ['adam', 'jhon', 'tom']
};

export default function valuesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_R:
      return Object.assign(
        {},
        state,
        {
          rCurrent: action.value
        }
      );
    case SELECT_X:
      return Object.assign(
        {},
        state,
        {
          xCurrent: action.value
        }
      );
    case CHANGE_Y:
      return Object.assign(
        {},
        state,
        {
          yCurrent: action.value
        }
      );
      case CHANGE_MES:
      return Object.assign(
        {},
        state,
        {
          mesCurrent: action.value
        }
      );
    case SET_USERS:
      return Object.assign(
        {},
        state,
        {
          users: action.value
        }
      );
    case CLEAR_CURRENT:
      return Object.assign(
        {},
        state,
        {
          rCurrent: [],
          xCurrent: [],
          yCurrent: undefined,
          //mesCurrent: 0
        }
      );
    default:
      return state;
  }
}

export function selectR(value) {
  return { type: SELECT_R, value };
}

export function selectX(value) {
  return { type: SELECT_X, value };
}

export function changeY(value) {
  return { type: CHANGE_Y, value };
}


export function clearCurrent() {
  return { type: CLEAR_CURRENT };
}

export function setUsers(value) {
  return { type: SET_USERS, value}
}

export const checkEntry = () => (dispatch, getState) => {
  entryAPI.checkEntry(
    JSON.parse(localStorage.getItem('userWl4')).username,
    getState().values.xCurrent,
    getState().values.yCurrent,
    getState().values.rCurrent,
    JSON.parse(localStorage.getItem('userWl4')).token)
    /*.then(response => {
      if (response.status === 200) {
        dispatch(addEntry(response.data));
      } else {
        alert(`Непредвиденный ответ ${response.status} от сервера!`);
      }
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(logout());
      } else {
        alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
      }
    })*/;
}

export const clearEntries = () => (dispatch) => {
  entryAPI.clearEntries(JSON.parse(localStorage.getItem('userWl4')).jwt)
    .then(response => {
      if (response.status === 200) {
        dispatch(setEntries([]));
      } else {
        alert(`Непредвиденный ответ ${response.status} от сервера!`);
      }
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(logout());
      } else {
        alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
      }
    });;
}



export const getUsers = () => (dispatch) => {
  //dispatch(setLoading(true));
  usersAPI.getUsers(JSON.parse(localStorage.getItem('userWl4')).token)
  //entryAPI.getEntries(localStorage.getItem('userWl4'))
    .then(response => {
      if (response.status === 200) {
        dispatch(setUsers(response.data));
      } else {
        alert(`Непредвиденный ответ ${response.status} от сервера!`);
      }
      //dispatch(setLoading(false));
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(logout());
      } else {
        alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
      }
      //dispatch(setLoading(false));
    });
}
