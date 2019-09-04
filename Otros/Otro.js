import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Colors from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Otro extends React.Component {
  render() {
    return (
      <Text style={styles.TextH1}>OTRO COMPONENTE</Text>
    )
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    //backgroundColor: "#fff"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    //paddingVertical: 4,
    margin: 5,
    //backgroundColor: "#fff"
  },
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
    height: hp('60%'),
    marginHorizontal: wp('5%'),
    marginBottom: hp('4%'),
    //padding: wp('5%'),
    borderRadius: 25,
    backgroundColor: 'white',
    color: 'white',
    flexDirection: 'row',
  },
});

