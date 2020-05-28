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
    // this.favcopy=this.favourite.bind(this)
  }




  //
  // favcopy=() =>{
  //
  //
  // console.log('her')
  // console.log(this.props)
  // this.setState({fav: this.props.fav})}
  //


  render() {
      // console.log(this.props)
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

export default FavScreen;

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
