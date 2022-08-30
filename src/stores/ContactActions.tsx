import {ContactAction, DispatchType, IContact} from './types';
import * as actionTypes from './actionTypes';

export function addContact(payload: IContact) {
  const action: ContactAction = {
    type: actionTypes.ADD_CONTACT,
    payload,
  };

  return simulateHttpRequest(action);
}

export function removeContact(payload: IContact) {
  const action: ContactAction = {
    type: actionTypes.REMOVE_CONTACT,
    payload,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ContactAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
