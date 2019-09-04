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
import Otro from '../Otros/Otro';

export default class InformacionScreen extends React.Component {
  static navigationOptions = {
    title: 'Infomación',
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
    fetch("http://192.168.0.93:8000/api/list_institutional_JSON")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  renderItem = (data) =>
    <TouchableOpacity>
      <View style={styles.Card}>
        <View style={{
          flex: 3,
          margin: wp('5%'),
        }}>
          <Text style={styles.TextH1}>Misión</Text>
          <Text>{data.item.mision}</Text>
          <Text style={styles.TextH1}>Visión</Text>
          <Text>{data.item.vision}</Text>
          <Text style={styles.TextH1}>Dirección</Text>
          <Text>{data.item.direccion}</Text>
          <Text style={styles.TextH1}>Teléfono</Text>
          <Text>{data.item.telefono}</Text>
          <Text style={styles.TextH1}>Web</Text>
          <Text>{data.item.web}</Text>
          <Text style={styles.TextH1}>Correo</Text>
          <Text>{data.item.email}</Text>          
        </View>
      </View>
    </TouchableOpacity>

render() {
  if (this.state.loading) {
    return (
      <View style={styles.loader}>
        <Text>Cargando...</Text>
        <ActivityIndicator size="large" color={Colors.Primary} />
      </View>
    )
  }
  return (
    <ScrollView style={styles.ScrollView}>
    <Text style={styles.TextH1}>ACERCA DE NOSOTROS OTRO2</Text>
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
