import {
  NAME_CHANGED,
  LOGIN_SUCCESS,
  CREATE_SOCKET
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
}
const userJoined= (data, dispatch) =>{
  console.log(data);
}
const userLeft= (data, dispatch) =>{
  console.log(data);
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

export const loginUser = ({socket, name}) => {
  return(dispatch) => {
    //dispatch({type: LOGIN_USER});
      socket.emit("add user", name)

  }
};
