
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import MemoryScreen from './Memory';
import CPUScreen from './CPU';

const Settingtab = createBottomTabNavigator({
    CPU: {
        screen: CPUScreen,
        navigationOptions: {
            title: "CPU",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "Memory",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});


export default createStackNavigator({ Settingtab }, { headerMode: "none" });