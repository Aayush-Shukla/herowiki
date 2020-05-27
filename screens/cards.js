import * as React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Dimensions } from "react-native";



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
                    onPress={() => {}}
                    title="Push"
                    color="blue"
                />

                <CardButton
                    onPress={() => {props.fav(props.hero)}}
                    title="Add to Favourite"
                    color="blue"
                />
            </CardAction>
        </Card>
    );
}