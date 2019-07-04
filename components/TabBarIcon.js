import React from 'react';
import { Icon } from 'expo';
import {
  View,
  StyleSheet,
} from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View style={styles.ContentIcon}>
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom:-6 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContentIcon: {
    flex: 1,
    //backgroundColor: 'red',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});