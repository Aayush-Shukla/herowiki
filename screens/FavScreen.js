import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Cardsv from "./cards";



class FavScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      fav:[]

    };

  }







  render() {

    const cards=this.props.favlist.map(hero=>{
      return(

          <Cardsv hero={hero} key={hero.id} favlist={this.props.favlist} searched='false' del={this.props.del}/>
      )




    });
    return (
        <View style={styles.container}>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            {/*{this.favcopy()}*/}
            <View className="row">

              {cards}
            </View>

            {/*{this.setState({fav: this.props.fav})}*/}
            {console.log(this.state)}




          </ScrollView>



        </View>
    );
  }
}

FavScreen.navigationOptions = {
  header: null,
};




export default FavScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },

});
