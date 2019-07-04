import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import ProgramacionScreen from '../screens/ProgramacionScreen';
import InformacionScreen from '../screens/InformacionScreen';
import AuspiciosScreen from '../screens/AuspiciosScreen';

const ProgramacionStack = createStackNavigator({
  Programacion: ProgramacionScreen,
});

ProgramacionStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel
      focused={focused}
      name={'Programación'}
    />
  ),

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-play-circle${focused ? '' : '-outline'}`
          : 'md-play-circle'
      }
    />
  ),
};

const InformacionStack = createStackNavigator({
  Informacion: InformacionScreen,
});

InformacionStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel
      focused={focused}
      name={'Información'}
    />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ?
        'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

const AuspiciosStack = createStackNavigator({
  Auspicios: AuspiciosScreen,
});

AuspiciosStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel
      focused={focused}
      name={'Auspiciadores'}
    />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-megaphone' : 'md-megaphone'}
    />
  ),
};

export default createBottomTabNavigator({
    ProgramacionStack,
    InformacionStack,
    AuspiciosStack,
  }
);
