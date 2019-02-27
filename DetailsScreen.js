import React ,{Component} from "react";
import { View, Text,Button} from "react-native";
import ProfileScreen from './ProfileScreen'
import SettingScreen from './SettingScreen'
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation'


class  DetailsScreen extends Component {
  
  
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return{
        // title: navigation.getParam('name', 'NO-ID'),
        title :  params ? params.name : 'A Nested Details Screen' ,
        headerStyle: {
            backgroundColor: '#ffffe6',
          },
          headerTintColor: '#999999',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };
    
    // title: 'Go to Home',  
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
  


  
  
  