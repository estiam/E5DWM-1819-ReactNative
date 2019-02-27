import { SET_USER, UNSET_USER } from './actions';
import { AsyncStorage } from 'react-native';

const initialState = null;

export default (state= initialState, action) => {
  console.log(state);
  switch(action.type) {
    case SET_USER:
      AsyncStorage.setItem('user', JSON.stringify(action.user));
      return action.user;
    case UNSET_USER:
      AsyncStorage.removeItem('user');
      return initialState;
    default:
      return state; 
  }
}