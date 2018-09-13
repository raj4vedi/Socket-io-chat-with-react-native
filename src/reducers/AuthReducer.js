import {
  NAME_CHANGED,
  CREATE_SOCKET
} from '../actions/types';
const INITIAL_STATE = {
  name: '',
  loading : false,
  socket: null
};

export default (state = INITIAL_STATE, action) =>{
  //console.log(action);
  switch(action.type){
    case NAME_CHANGED:
        return {...state, name: action.payload};
    case CREATE_SOCKET:
        return {...state, socket: action.payload};
    default:
      return state;
  }
};
