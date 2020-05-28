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
      // this.favourite=this.favourite.bind(this)
    }



      //   componentDidMount()
      //   {
      //     for (var i = 341; i <= 346; i++) {
      //
      //     fetch(`https://www.superheroapi.com/api.php/1340448086165241/${i}`)
      //         .then(response => response.json())
      //         .then((responseJson) => {
      //
      //           console.log(responseJson)
      //           var joined = this.state.data.concat(responseJson);
      //
      //           this.setState({
      //             loading: false,
      //             data: joined
      //           })
      //         })
      //
      //
      //   }
      //
      // }

// favourite(e) {
//     console.log(this.state.fav)
//     var fjoined = this.state.fav.concat(e);
//
//     this.setState({
//           loading: false,
//           fav: fjoined
//         }
//     )
//     // create a function that saves your data asyncronously
//
//     // as();
//
//   }
  // async function as() {
  //   try {
  //     await AsyncStorage.setItem('fav', this.state.fav);
  //     console.log('done')
  //
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }





  render() {





    const cards=this.props.data.map(hero=>{
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

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

export default HomeScreen;

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
