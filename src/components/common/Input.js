import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';



const Input = ({label, value, onChangeText,placeholder,secureTextEntry}) => {
  return(
    <View style = {styles.containerStyle}>
        <Text style = {styles.labelStyle}>{label}</Text>
        <TextInput
            secureTextEntry = {secureTextEntry}
            placeholder = {placeholder}
            value = {value}
            onChangeText = {onChangeText}
            style = {styles.inputStyle}
        />
    </View>
  );
};


const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
});
//  Linking.openURL(purchaseUrl)
export { Input };
