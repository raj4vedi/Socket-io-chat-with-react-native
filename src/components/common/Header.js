import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
  return(
    <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset:  {width: 0,height: 5},
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header };
