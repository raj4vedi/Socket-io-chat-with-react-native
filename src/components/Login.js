import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button, Card, CardSection, Input, Spinner, Header} from './common';
import {connect} from 'react-redux';
import {readySocket, nameChanged, loginUser} from '../actions';


class Login extends Component{

  componentWillMount(){
    console.log("connecting");
    this.props.readySocket();
  }

  onNameChange(text){
    this.props.nameChanged(text);
  }


  onButtonPress(){
    const {name, socket} = this.props;
    this.props.loginUser({socket, name});
  }

  renderButton(){
   if (this.props.loading) {
      return <Spinner size = "small"/>;
   }
   return(
     <Button onPress = {this.onButtonPress.bind(this)}>
         Continue
     </Button>
   );
 }

  render(){
        console.log("Rendering  Login",this.props.messages);
    return(
      <View>
        <Header headerText='Login'/>
        <Card style = {{marginTop:200}}>
            <CardSection>
                <Input
                    label= "Name"
                    placeholder = "Enter name..."
                    onChangeText = {this.onNameChange.bind(this)}
                    value = {this.props.name}
                />
            </CardSection>

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
      </View>
    );
  }

}


const mapStateToProps = ({connection}) =>{
  const {name, loading, socket} = connection;

  return{name, loading, socket};
};

export default connect(mapStateToProps, {
  nameChanged, loginUser, readySocket
})(Login);
