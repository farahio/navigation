import React from 'react';
import { Button, View,ActivityIndicator,Image,Dimensions} from 'react-native';
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
          style={{width:dim.width,height:dim.height,position:'absolute'}}
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


const MyNavigator = createSwitchNavigator({
  screen1: Screen1,
  Home:HomeScreen
 
},
);
export default createAppContainer(MyNavigator);