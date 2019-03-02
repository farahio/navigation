import React ,{Component} from "react";
import { View, Text,Button,StyleSheet} from "react-native";

class Modal extends React.Component {
    render() {
      return (
        <View style={styles.view1}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      
    },
view1:
  { flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  }
  })

export default (Modal)
