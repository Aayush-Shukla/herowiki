import * as React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Dimensions } from "react-native";
import { AsyncStorage } from "react-native";


function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
export default function Cardsv(props) {


    return (

        <Card style={{ marginBottom:30, width:0.80*Dimensions.get('window') }}>
            <CardImage
                source={{uri: props.hero.image.url}}
                resizeMode='contain'
                style={{ paddingBottom:0.75*Dimensions.get('window').width}}


        />
            <CardTitle
                title={props.hero.name}

            />
            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction
                separator={true}
                inColumn={false}>


                <CardButton
                    onPress={() => {contains(props.favlist,props.hero)?props.del(props.hero):props.fav(props.hero)}}
                    title={contains(props.favlist,props.hero)?"Remove from Favourite":"Add to Favourite"}
                    color="blue"
                />
            </CardAction>
        </Card>
    );
}