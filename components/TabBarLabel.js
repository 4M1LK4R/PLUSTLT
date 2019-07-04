import React from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarLabel extends React.Component {
  render() {
    return (
      <View style={styles.ContentLabel}>
        <Text style = {{
          fontSize: 10,
          color: this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }}>     
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ContentLabel: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
