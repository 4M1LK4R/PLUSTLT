import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class AuspiciosScreen extends React.Component {
  static navigationOptions = {
    title: 'Auspicios',
    headerStyle: {
      backgroundColor: Colors.Primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      url:'http://192.168.0.93:8000',
      loading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    fetch("http://192.168.0.93:8000/api/list_advertisement_JSON")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      />
    );
  }

  renderItem = (data) =>
    <TouchableOpacity>
      <View style={styles.CardImage}>
        <View style={{
          flex: 3,
          margin: wp('5%'),
        }}>
          <Text style={styles.TextH1}>{data.item.nombre}</Text>
          <Text>Auspiciado por: {data.item.auspice.nombre}</Text>
          <Text>{data.item.descripcion}</Text>
        </View>
        <View style={{
          flex: 2,
          alignItems: 'center',
          //backgroundColor: Colors.Primary,
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
            
            source={{ uri:  this.state.url+data.item.logo }}
            //source={{ uri: 'http://192.168.0.93:8000/images/Avisos/Kwarw5p1lA11.png' }}
            
          />
        </View>
      </View>
    </TouchableOpacity>

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <Text>Cargando</Text>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      )
    }
    return (
      <ScrollView style={styles.ScrollView}>
        <View>
          <FlatList
            data={this.state.dataSource}           
            renderItem={item => this.renderItem(item)}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
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
  CardImage: {
    flex: 1,
    width: wp('80%'),
    height: hp('35%'),
    marginHorizontal: wp('5%'),
    marginBottom: hp('4%'),
    //padding: wp('5%'),
    borderRadius: 25,
    backgroundColor: 'white',
    color: 'white',
    flexDirection: 'row',
  },
});
