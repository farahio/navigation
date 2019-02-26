import React from "react";
import { View, Text,Button,Platform,TextInput} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from './DetailsScreen'
import Color from './Color'

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      count: 0,
    
    }
  }
   newtext=text=>{
     this.setState({
       text:text
     })
     
   }
   static navigationOptions = ({ navigation }) => {
    // headerTitle: <Color />,
    return {
      headerTitle: <Color />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
    
    // headerStyle: {
    //   backgroundColor: '#E3C5F2',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  };
  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }


  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

 
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:'#64D8DE' }}>
        <Text style={{fontSize:24}}>Home Screen</Text>
        <TextInput onChangeText={this.newtext}style={{width:200,height:50,borderWidth:1}}/>
        <Text>{this.state.count}</Text>
        <View style={{margin:10}}>
        <Button
          title="Go to Details"
          onPress={() => {
           this.props.navigation.navigate('Details', {
             name : this.state.text,
              // itemId: 86,
              otherParam: 'hello',
            });
          }}
        />
        </View>
      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
{
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);
