import React ,{Component} from "react";
import { View, Text,Button} from "react-native";
import {createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from "./HomeScreen";
 export default class SettingScreen extends Component {
  

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:'#D3274E'}}>
          <Text style={{fontSize:24,color:'#C6E71E'}}>Setting Screen</Text>
     
         <View style={{margin:10}}>
        <Button
          title="Go To Home"
          onPress={() => this.props.navigation.navigate('screen')}
        />
         </View>
         <Button
            title='Profile'
            onPress={()=>this.props.navigation.navigate('Profile')}
         
         />

       </View>
      );
    }
  }


  