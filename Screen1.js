import React from 'react';
import { Button, View,ActivityIndicator,Image,Dimensions,StyleSheet} from 'react-native';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
let dim = Dimensions.get('window')
class Screen1 extends React.Component {
  componentDidMount() {
setTimeout(()=>this.props.navigation.navigate('Home'),1000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./asecct/farah.png.jpg')}
          style={styles.image}
        />
        {/* <Button
          title={'Canada'}
          color='red'
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        <View>
          <ActivityIndicator size={'large'}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  image:{width:dim.width,height:dim.height,position:'absolute'}
})

const MyNavigator = createSwitchNavigator({
  screen1: Screen1,
  Home:HomeScreen
 
},
);
export default createAppContainer(MyNavigator);