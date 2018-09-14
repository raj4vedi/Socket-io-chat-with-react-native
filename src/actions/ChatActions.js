import {
  NAME_CHANGED,
  LOGIN_SUCCESS,
  CREATE_SOCKET,
  NEW_MESSAGE,
  MESSAGE_TYPED,
  NEW_MESSAGE_SEND
} from './types';
import {Actions} from 'react-native-router-flux';
import openSocket from "socket.io-client";



export const readySocket = () =>{
  return(dispatch) => {
    //dispatch({type: LOGIN_USER});
    const socket = openSocket("http://192.168.0.29:3000");
    socket.on("connect", data => connected(socket, data, dispatch));
    socket.on("disconnect", data => disconnected(data, dispatch));
    socket.on("login", data => loginEvent(socket, data, dispatch));
    socket.on("connect_error", data => connectError(data, dispatch));
    socket.on("connect_timeout", data => connectTimeout(data, dispatch));
    socket.on("new message", data => newMessage(data, dispatch));
    socket.on("user joined", data => userJoined(data, dispatch));
    socket.on("user left", data => userLeft(data, dispatch));
    socket.on("typing", data => typing(data, dispatch));
    socket.on("stop typing", data => stopTyping(data, dispatch));
    dispatch({type:CREATE_SOCKET, payload:socket})

  }
};

const connected= (socket, data, dispatch) =>{
  //socket.emit("add user", "username")
  socket.on("login", data => loginEvent(data, dispatch));
  console.log("Connected");
    //dispatch({type: LOGIN_USER_FAIL});
  //  setInterval(() => {

    /*  if (socket.isConnected) {
        console.log("Ping send");
        socket.emit("ping", "name");
      }else {
        console.log("ping not connected");
      }*/
    //  socket.emit("ping", "");
  // }, 5000);
}

const disconnected= (data, dispatch) =>{
  console.log("Disconnected");
}

const loginEvent= (socket, data, dispatch) =>{
  console.log("login  ", data);
  //socket.off("login", data => login(data, dispatch));
  Actions.chatPage(type='reset');
  //dispatch({type:LOGIN_SUCCESS})
}


const connectError= (data, dispatch) =>{
  console.log(data);
}

const connectTimeout= (data, dispatch) =>{
  console.log(data);
}

const newMessage= (data, dispatch) =>{
  console.log(data);
  //var obj = JSON.parse(data);
  let msg = {...data, type:'text'}
  dispatch({type:NEW_MESSAGE, payload:msg})
}
const userJoined= (data, dispatch) =>{
  console.log(data);
  let msg = {...data, type:'joined'}
  dispatch({type:NEW_MESSAGE, payload:msg})
}
const userLeft= (data, dispatch) =>{
  console.log(data);
  let msg = {...data, type:'left'}
  dispatch({type:NEW_MESSAGE, payload:msg})
}
const typing= (data, dispatch) =>{
  console.log(data);
}
const stopTyping= (data, dispatch) =>{
  console.log(data);
}


export const nameChanged = (text) =>{
  return{
    type: NAME_CHANGED,
    payload: text
  };
};

export const messageTyped = (text) =>{
  return{
    type: MESSAGE_TYPED,
    payload: text
  };
};

export const loginUser = ({socket, name}) => {
  return(dispatch) => {
    //dispatch({type: LOGIN_USER});
      socket.emit("add user", name);

  }
};

export const sendMessage = ({socket, text, username}) => {
  return(dispatch) => {
    //dispatch({type: LOGIN_USER});
      socket.emit("new message", text);
      let msg = {username:username, message:text, type:'text'};
      dispatch({type:NEW_MESSAGE_SEND, payload:msg});

  }
};
