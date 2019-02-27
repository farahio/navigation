import React,{Component} from 'react';
import { View, Text,Button,Platform,TextInput,TouchableHighlight} from "react-native";
import { createStackNavigator,createBottomTabNavigator,createAppContainer,createDrawerNavigator} from "react-navigation";
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import Modal from './Modal'
import Color from './Color'

const AppNavigator = createStackNavigator(
{
    Home: HomeScreen,
    Details: DetailsScreen,
    kazem:Modal
  },
  {
    mode:'modal',
  },

  {
    initialRouteName: "Home"
  }
);
 
    
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
    static navigationOptions = ({ navigation }) => {
 
 
        return {
          headerTitle: <Color />,
          headerRight: (
            <Button
              onPress={navigation.getParam('increaseCount')}
              title="+"
              color={Platform.OS === 'ios' ? '#fff' : null}
            />
          ),
          headerLeft: (
            <Button
              onPress={() => navigation.navigate('kazem')}
              title="Info"
              color="blue"
            />
          ),
          
          }
        }
  render() {
    return <AppContainer/>;
  }
}
