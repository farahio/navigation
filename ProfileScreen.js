import React ,{Component} from "react";
import { View, Text,Button} from "react-native";
export default class ProfileScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:'#5B2C6F'}}>
          <Text style={{fontSize:24,color:'#41F5ED'}}>Profile Screen</Text>
     
         <View style={{margin:10}}>
        <Button
          title="Go To Details"
          onPress={() => this.props.navigation.navigate('Details')}

        />

</View>  
        <Button
          title="Go To Home"
          onPress={() => this.props.navigation.goBack()}
        />
       </View>
      );
    }
  }

  