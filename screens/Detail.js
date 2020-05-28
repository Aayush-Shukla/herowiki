import * as React from 'react';

import { Dimensions } from "react-native";
// import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { AsyncStorage } from "react-native";



export default function DetailsScreen (props) {


    return (

        <Card style={{ marginBottom:30, width:0.80*Dimensions.get('window') }} onPress={() => this.props.navigation.navigate('Details')}>
            <Text>hi</Text>
        </Card>
    );
}
