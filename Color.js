import React from "react";
import { View, Text,Button,TextInput,Image} from "react-native";
 export default class Color extends React.Component {
  render() {
    return (
      <Image
        source={require('./asecct/reddit.png')}
        style={styles.img}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
img:{ width: 40, height: 40 ,marginLeft:10}

})