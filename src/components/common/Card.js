import React from 'react';
import { StyleSheet, View} from 'react-native';


const Card = (props) => {
  return(
    <View style = {[styles.cardStyle,props.style]}>
        {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
});

export { Card };
