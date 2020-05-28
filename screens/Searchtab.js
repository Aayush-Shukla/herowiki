
import * as React from 'react';
import Cardsv from "./cards";
import {Platform, StyleSheet, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import { Searchbar } from 'react-native-paper';


export default class Searchtab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            searchQuery: '',
            loading: true
        };
        this.updateSearch=this.updateSearch.bind(this)
        this._onChangeSearch=this._onChangeSearch.bind(this)
    }

        updateSearch()  {
        if(isNaN(this.state.searchQuery)) {
            {console.log(`https://www.superheroapi.com/api.php/1340448086165241/${this.state.searchQuery}`)}


                fetch(`https://www.superheroapi.com/api.php/1340448086165241/search/${this.state.searchQuery}`)
                .then(response => response.json())

                .then((responseJson) => {


                    if (responseJson.response != 'error') {
                        this.setState({
                            loading: false,
                            search: responseJson.results
                        })
                    }
                    console.log(this.state.search)
                })
        }
        else
        {console.log(`https://www.superheroapi.com/api.php/1340448086165241/${this.state.searchQuery}`)
            var result = [];
            fetch(`https://www.superheroapi.com/api.php/1340448086165241/${this.state.searchQuery}`)

                .then(response => response.json())

                .then((responseJson) => {
                    result.push(responseJson)


                    if (responseJson.response!='error'){
                        this.setState({
                            loading: false,
                            search: result
                        })}
                    console.log(this.state.search)
                })

        }



        };




    _onChangeSearch = query => this.setState({ searchQuery: query });

        render() {
        const { search } = this.state;

            const cards=this.state.search.map(hero=>{
            return(

                <Cardsv hero={hero} key={hero.id} searched='true'/>
            )});


                return (

                    <View style={styles.container}>

                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
                    <Searchbar
                placeholder="Search Hero..."
               // onSearchButtonPress={(e)=>this.updateSearch}
                               onChangeText={this._onChangeSearch}
                onSubmitEditing = {this.updateSearch}
                               value={this.state.searchQuery}

                    />



                    <View className="row">

                    {cards}
            </View>

            {console.log(cards)}




            </ScrollView>



            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
