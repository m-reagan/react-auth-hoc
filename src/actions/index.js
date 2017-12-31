import {
  CHANGE_AUTH
} from './types';

export function changeAuthStatus(newStatus) {
  console.log('action',newStatus);
  return {
    type: CHANGE_AUTH,
    payload: newStatus
  }
}