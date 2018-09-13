import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Button, Card, CardSection, Input, Header} from './common';
import {connect} from 'react-redux';
import {nameChanged, loginUser} from '../actions';


class ChatPage extends Component{

  onNameChange(text){
    this.props.nameChanged(text);
  }


  render(){
    console.log("Rendering  ",this.props.messages);
    return(
      <View style ={{flex:1}}>
        <Header headerText='Chat'/>
        <View style ={{flex:1}}>
        </View>
          <View style ={{
            elevation:3,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor: '#fff',
            paddingLeft: 15,
            paddingRight: 15
           }}>
          <TextInput
              placeholder = 'type here...'
              //value = {value}
              //onChangeText = {onChangeText}
              style = {{flex:1}}
          />
          <Image style={{height:20, width:20, marginLeft:10}}
          source = {require('../img/send.png')}/>
          </View>
      </View>
    );
  }

}


const mapStateToProps = ({auth, chat}) =>{
  const {name, loading} = auth;
  const {messages} = chat;

  return{name, loading, messages};
};

export default connect(mapStateToProps, {
  nameChanged, loginUser
})(ChatPage);
