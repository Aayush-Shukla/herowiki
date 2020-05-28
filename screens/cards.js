import * as React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Dimensions } from "react-native";
// import { createStackNavigator, createBottomTabNavigator } from '@react-navigation';
// import { AsyncStorage } from "react-native";
// import { createAppContainer } from '@react-navigation';
//
// import { createStackNavigator} from '@react-navigation-stack';
// import DetailsScreen from "./Detail";

function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
export default class Cardsv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toggleBox=this.toggleBox.bind(this);
    }

    toggleBox() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {
        const {
            props,
        } = this;
        // const { opened } = this.state;
if(this.state.opened){
    console.log(props.hero.biography['full-name'])
    var s=
        `POWERSTATS:\n
Intelligence : ${props.hero.powerstats.intelligence} \nStrength : ${props.hero.powerstats.strength} \nSpeed : ${props.hero.powerstats.speed} \nDurability : ${props.hero.powerstats.durability} \nCombat : ${props.hero.powerstats.combat} \n
BIOGRAPHY:\n
Full name : ${props.hero.biography['full-name']} \nAlter Ego : ${props.hero.biography['alter-egos']} \nALiases : ${props.hero['biography.aliases']} \nPlace Of Birth : ${props.hero.biography['place-of-birth']}\nFirst Appearance : ${props.hero.biography['first-appearance']}\nPublisher : ${props.hero.biography.publisher}\nAlignment : ${props.hero.biography.alignment}\n
APPEARANCE:\n
Gender : ${props.hero.appearance.gender}\nRace : ${props.hero.appearance.race}\nHeight : ${props.hero.appearance.height}\nWeight : ${props.hero.appearance.weight}\nEye Colour : ${props.hero.appearance['eye-color']}\nHair Colour : ${props.hero.appearance['hair-color']}\n
WORK:\n
Occupation : ${props.hero.work.occupation}\nBase : ${props.hero.work.base}\n
CONNECTIONS:\n
Group Affiliation : ${props.hero.connections['group-affiliation']}\nRelatives : ${props.hero.connections.relatives}`}


        return (


            <Card style={{ marginBottom:30, width:0.80*Dimensions.get('window') }} onPress={this.toggleBox}>
                <CardImage
                    source={{uri: props.hero.image.url}}
                    resizeMode='contain'
                    style={{ paddingBottom:0.75*Dimensions.get('window').width}}


            />
                <CardTitle
                    title={props.hero.name}

                />
                <CardContent text={s}  />


                <CardAction
                    separator={true}
                    inColumn={false}>


                    <CardButton
                        onPress={() => {contains(props.favlist,props.hero)?props.del(props.hero):props.fav(props.hero)}}
                        title={props.searched?"":contains(props.favlist,props.hero)?"Remove from Favourite":"Add to Favourite"}
                        color="blue"
                    />
                </CardAction>
            </Card>


    );
    }
}
// const DetailStack = createStackNavigator({
//     // Home: { screen: HomeScreen },
//     Details: { screen: DetailsScreen },
// });
// const DetailContainer=createAppContainer(DetailStack)