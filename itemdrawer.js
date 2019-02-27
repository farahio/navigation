import React from 'react'
import { createDrawerNavigator } from 'react-navigation';

import Settings from './SettingScreen';  
import Profile from './ProfileScreen'; 

export default createDrawerNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
     
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
     
    }
  }
});