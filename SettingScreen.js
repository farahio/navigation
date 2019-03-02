import React ,{Component} from "react";
import { View, Text,Button,StyleSheet} from "react-native";
import {createAppContainer} from 'react-navigation'

 export default class SettingScreen extends Component {


    render() {
      return (
        <View style={styles.View1}>
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
           <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      

       </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      
    },
    view1:{ flex: 1,
       alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#D3274E'}
  })

  



  