import React ,{Component} from "react";
import { View, Text,Button} from "react-native";
import ProfileScreen from './ProfileScreen'
import SettingScreen from './SettingScreen'
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation'


class  DetailsScreen extends Component {

static navigationOptions = ({ navigation }) => {


    return {
      title: navigation.getParam('otherParam', 'hello navigation'),
    };
  };
 
    render() {
    
      const { navigation } = this.props;
      
      const name = navigation.getParam('name')?navigation.getParam('name'):'khali';
    
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:'#48C9B0'}}>
          <Text style={{fontSize:24,color:'#041DF3'}}>Details Screen</Text>
         
          <Text>{JSON.stringify(name)}</Text>
       
           <View style={{margin:10}}>
          <Button
          title="Go To Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
  />


<Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        </View>
      
       </View>
       
      );
    }
  }
  const AppNavigator = createBottomTabNavigator(
    {
      Profile:ProfileScreen,
      Setting:SettingScreen,
      Details:DetailsScreen,
  
    },
    {
      initialRouteName:'Details',
      tabBarOptions: {
        labelStyle: {
          fontSize: 20,
          
        },
        tabStyle: {
          width: 100,
          marginBottom:5
        },
        style: {
          backgroundColor: '#F9E79F',
         
        },
      }

    },
    
    
  
  
  );
  export default createAppContainer(AppNavigator);
  


  
  
  