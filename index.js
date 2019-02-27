/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Homeasli from './Homeasli'
import HomeScreen from './HomeScreen';
import Screen1 from './Screen1'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>Screen1);
