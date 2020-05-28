
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

});
