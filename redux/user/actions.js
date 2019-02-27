export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export const setCurrentUser = user => {
  return {
    type: SET_USER,
    user,
  }
}

export const unsetCurrentUser = () => {
  return { 
    type: UNSET_USER
  }
}