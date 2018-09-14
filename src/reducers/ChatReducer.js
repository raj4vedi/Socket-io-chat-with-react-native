import {
  NEW_MESSAGE,
  MESSAGE_TYPED,
  NEW_MESSAGE_SEND
} from '../actions/types';

const INITIAL_STATE = {
  messages: [],
  messageText:''
};

export default (state = INITIAL_STATE, action) =>{
  //console.log("ChatReducer  ", action);
  //console.log("ChatReducer2  ", state);
  switch(action.type){
    case NEW_MESSAGE:{
        let msgs = state.messages;
        let newMsg = [...msgs]
        newMsg.push(action.payload);
        return {...state, messages: newMsg};
      }
    case MESSAGE_TYPED:
        return {...state, messageText: action.payload};
    case NEW_MESSAGE_SEND:{
        let msgs = state.messages;
        let newMsg = [...msgs]
        newMsg.push(action.payload);
        return {...state, messages: newMsg, messageText:''};
      }
    default:
      return state;
  }
};
