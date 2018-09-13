import React from 'react';
import { Scene, Router, Actions, Stack, ActionConst } from 'react-native-router-flux';
import Login from './components/Login';
import ChatPage from './components/ChatPage';

const RouterComponent = () => {
  return(
    <Router>
        <Scene hideNavBar key= "root">

          <Scene key ="login" component={Login} title ="Please Login" initial/>

          <Scene key="chatPage" component={ChatPage} title="Chat" />
        </Scene>

    </Router>
  );

};

export default RouterComponent;
