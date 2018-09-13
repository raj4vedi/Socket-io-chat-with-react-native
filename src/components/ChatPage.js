import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import {connect} from 'react-redux';
import {nameChanged, loginUser} from '../actions';


class ChatPage extends Component{

  onNameChange(text){
    this.props.nameChanged(text);
  }


  render(){
    return(
      <Card>
          <CardSection>
              <Text>CHAT</Text>
          </CardSection>
      </Card>
    );
  }

}


const mapStateToProps = ({auth}) =>{
  const {name, loading} = auth;

  return{name, loading};
};

export default connect(mapStateToProps, {
  nameChanged, loginUser
})(ChatPage);
