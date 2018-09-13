import {
  NAME_CHANGED,
} from '../actions/types';
const INITIAL_STATE = {
  name: '',
  loading : false,
};

export default (state = INITIAL_STATE, action) =>{
  console.log(action);
  switch(action.type){
    case NAME_CHANGED:
        return {...state, name: action.payload};
    default:
      return state;
  }
};
