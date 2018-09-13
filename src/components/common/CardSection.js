import React from 'react';
import { StyleSheet, View} from 'react-native';

const CardSection = (props) => {
  return(
    <View style = {[styles.cardSectionStyle,props.style]}>
        {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
});

export { CardSection };
