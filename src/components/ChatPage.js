import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity, BackHandler} from 'react-native';
import {Button, Card, CardSection, Input, Header} from './common';
import {connect} from 'react-redux';
import {nameChanged, loginUser, sendMessage, messageTyped} from '../actions';


class ChatPage extends Component{

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._backAndroid);

  }

  _backAndroid = () => {
    BackHandler.exitApp();
    return true;
  }

  onMessageChange(text){
    this.props.messageTyped(text);
  }

  componentWillUnmount(){
    this.props.socket.disconnect();

  }

  renderItem(item){
    if (item.type==='text') {
      return(
        <View style={{flexDirection:'row', alignItems:'center', marginLeft:10}}>
          <Text style={{fontSize:18, color:'#91580F'}}>{item.username}</Text>
          <Text style={{marginLeft:15}}>{item.message}</Text>
        </View>
      );
    }
    if(item.type==='joined'){
      return(
        <View style={{flexDirection:'row', alignItems:'center', marginLeft:10, justifyContent:'center'}}>
          <Text style={{marginLeft:15, flex:1, textAlign:'center'}}>{`${item.username} Joined\nthere are ${item.numUsers} users`}</Text>
        </View>
      );
    }
    if (item.type==='left'){
      return(
        <View style={{flexDirection:'row', alignItems:'center', marginLeft:10, justifyContent:'center'}}>
          <Text style={{marginLeft:15, flex:1, textAlign:'center'}}>{`${item.username} Left\nthere are ${item.numUsers} users`}</Text>
        </View>
      );
    }

  }

  onMessageSend(){
    const {name, socket, messageText} = this.props;
    this.props.sendMessage({socket, text:messageText, username:name});
  }

  render(){
    console.log("Rendering  ",this.props.messages);
    return(
      <View style ={{flex:1}}>
        <Header headerText='Chat'/>
        <View style ={{flex:1}}>
          <FlatList
            data = {this.props.messages}
            renderItem = {({item}) => this.renderItem(item)}
            keyExtractor = { (item, index) => index.toString() }
            />
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
                value = {this.props.messageText}
                onChangeText = {this.onMessageChange.bind(this)}
                style = {{flex:1}}
            />
            <TouchableOpacity style = {{alignItems:'center'}}
              onPress={this.onMessageSend.bind(this)}>
              <Image style={{height:20, width:20, marginLeft:10}}
              source = {require('../img/send.png')}/>
            </TouchableOpacity>
        </View>

      </View>
    );
  }

}


const mapStateToProps = ({connection, chat}) =>{
  const {name, loading, socket} = connection;
  const {messages, messageText} = chat;

  return{name, loading, messages, messageText, socket};
};

export default connect(mapStateToProps, {
  nameChanged, loginUser, sendMessage, messageTyped
})(ChatPage);
