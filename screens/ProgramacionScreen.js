import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, WebView } from 'react-native';
import Colors from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ProgramacionScreen extends React.Component {
  static navigationOptions = {
    title: 'Programación',
    headerStyle: {
      backgroundColor: Colors.Primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (

      <ScrollView style={styles.ScrollView}>
        <Text style={{ fontSize: 18, marginBottom: hp('1%') }}>Programación en VIVO</Text>
        <View style={styles.Card}>
          <WebView
            javaScriptEnabled={true}
            style={{ flex: 1 }}
            source={{ uri: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Foo.jazz.1%2Fvideos%2F1058148681042592%2F&show_text=0&width=560&allowFullScreen="true"' }}
          />
          <Text></Text>
        </View>
        <View style={styles.CardImage}>
          <View style={{
            flex: 3,
            //padding: wp('5%'),
            margin: wp('5%'),
          }}>
            <Text style={styles.TextH1}>NOMBRE PROGRANA</Text>
            <Text>Horario:</Text>
            <Text>9:00 - 10:30</Text>
            <Text>Contenido:</Text>
            <Text>Texto texto texto</Text>
          </View>
          <View style={{
            flex: 2,
            alignItems: 'center',
            backgroundColor: Colors.Primary,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 25,

          }}>
            <Image
              style={{
                width: wp('28%'),
                height: hp('35%'),
                resizeMode: 'cover',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 25,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 25,
              }}
              source={{ uri: 'http://plustlt.tv/wp-content/uploads/2017/07/LOGO-TOPS-WEB-1-640x360.png' }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  ScrollView: {
    flex: 1,
    backgroundColor: Colors.Gray,
    padding: wp('5%'),
    alignItems: 'center',

    //justifyContent: 'center',
  },
  TextH1: {
    fontSize: 18,
    color: Colors.Primary,
  },
  Card: {
    flex: 1,
    width: wp('80%'),
    height: hp('30%'),
    marginHorizontal: wp('5%'),
    marginBottom: hp('8%'),
    padding: wp('5%'),
    borderRadius: 25,
    backgroundColor: Colors.Primary,

  },
  CardImage: {
    flex: 1,
    width: wp('80%'),
    height: hp('35%'),
    marginHorizontal: wp('5%'),
    marginBottom: hp('10%'),
    //padding: wp('5%'),
    borderRadius: 25,
    backgroundColor: 'white',
    color: 'white',
    flexDirection: 'row',
  },
});
