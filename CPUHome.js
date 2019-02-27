import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import Styles from '../../styles';

class CPUHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "CPU",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
               
            </TouchableOpacity>
        ),
    })
    render() {
        return (
            <View style={Styles.container}>
                <Text>CPU Settings</Text>
                
                <Button
                    onPress={() => this.props.navigation.navigate("Details")}
                    title="Go To Details"
                />
            </View>
        );
    }
}



export default CPUHome;