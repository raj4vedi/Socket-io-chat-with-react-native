import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';


const Spinner = ({size}) => {
  return(
    <View style = {styles.spinnerStyle}>
        <ActivityIndicator size = {size || 'large'}/>
    </View>
  );
};
const styles = StyleSheet.create({
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export { Spinner };
