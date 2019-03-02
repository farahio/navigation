import React from "react";
import { StyleSheet,View, Text,Button,Platform,TextInput,TouchableHighlight} from "react-native";
import { createStackNavigator, createAppContainer,createDrawerNavigator} from "react-navigation";
import DetailsScreen from './DetailsScreen'
import Color from './Color'
import Modal from './Modal'


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
 
 
    return {
      headerTitle:'wellcom',
      headerTitleStyle:{marginLeft:100,color:'red'},
      headerRight: (
        <TouchableHighlight onPress={()=>navigation.openDrawer()} style={{width:50,height:30,backgroundColor:'skyblue',marginRight:10,justifyContent:'center',alignItems:'center'}}><Text>press</Text></TouchableHighlight>
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('kazem')}
          title="Info"
          color="blue"
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
      <View style={styles.view1}>
        <Text style={{fontSize:24}}>Home Screen</Text>
        <TextInput onChangeText={this.newtext}style={styles.text1}/>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  text1:{width:200,
    height:50,
    borderWidth:1
  },
  view1:{ flex: 1,
     alignItems: "center",
      justifyContent: "center",
      backgroundColor:'#64D8DE'
     }
})


const AppNavigator = createStackNavigator(
{
    Home: HomeScreen,
    Details: DetailsScreen,
    kazem:Modal
  },
  {
    mode:'modal',
  },

  {
    initialRouteName: "Home"
  }
);

const rootstack = createDrawerNavigator(
  {
      Home: AppNavigator
      
    },
    {
        drawerPosition:'right',
        drawerType:'slide'
    },
    {
      mode:'modal',
    },
  
    {
      initialRouteName: "Home"
    }
  );
  

export default createAppContainer(rootstack);


