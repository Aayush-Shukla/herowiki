import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Cardsv from "./cards";

class HomeScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: [],
        fav:[]

      };

    }








  render() {





    const cards=this.props.data.sort(function(a, b) {
        return a.id - b.id;
    }).map(hero=>{
        return(

        <Cardsv hero={hero} key={hero.id} fav={this.props.fav} favlist={this.props.favlist} del={this.props.del} searched='false'/>
        )



});
    return (
        <View style={styles.container}>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>


            <View className="row">

              {cards}
            </View>

            {console.log(cards)}




          </ScrollView>



        </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },



});
