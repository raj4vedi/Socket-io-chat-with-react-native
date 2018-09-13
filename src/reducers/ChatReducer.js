import {
  NEW_MESSAGE,
} from '../actions/types';

const INITIAL_STATE = {
  messages: [],
};

export default (state = INITIAL_STATE, action) =>{
  console.log("ChatReducer  ", action);
  switch(action.type){
    case NEW_MESSAGE:{
        let msgs = state.messages;
        let newMsg = [...msgs]
        newMsg.push(action.payload);
        return {...state, messages: newMsg};
      }
    default:
      return state;
  }
};
