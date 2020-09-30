import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      number: [
        ['C'],
        ['0', '.', '=', '/'],
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
      ],

      display: '0',
      result: '0',
    };
  }

  onPress = (character) => {
    // Alert('why?')
    if (character == '=') {
      // alert('why')
      f// this.setState({result:eval(this.state.display});
      this.setState({ display: this.state.result });
    }
    else if (character == 'C') {
      this.setState({ result: this.state.display });
      this.setState({ display: '0' })
      // alert('why')
    }
    else {
      // alert('why')
      let tmp = this.state.display
      this.setState({ display: this.state.display + character })
      this.setState({ result: eval(this.state.display) })
    }


  }

  setColor = (index, i) => {
    // if ( items  > 0 && index == 4)
    if (index > 0 && i > 2)
    return "white"
    if (index ==0 )
    return "white"
    
    else
      return "#FD395F"
    // else if (index == 4 && i == 1)
    //   return "red"
    // else
    //   return "#808080"
  }

  render() {
    return (
      <>
        <View style={{ flex: 4, backgroundColor: '#FD395F' }} >
          <View style={{ flex: 0.15, }}>
            <Text style={{ fontSize: 10, color: 'white', textAlign: 'center', marginTop: 10, }}>Gray Rubix Calculator</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#FD395F', alignItems: 'flex-end', paddingRight: 20 }}>
            <Text style={{ flex: 1, fontSize: 45, marginTop: '10%', color: 'white', textAlign: 'center' }}>{this.state.display}</Text>
            <Text style={{ flex: 0.5, fontSize: 25, marginTop: '10%', color: 'white', }}>{this.state.result}</Text>
          </View>
        </View>

        <View style={{ flex: 6, flexDirection: 'column-reverse', }}>
          {
            this.state.number.map(
              (items, index) => {
                return (
                  <View key={index} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#303248' }}>

                    {
                      items.map(
                        (item, i) => {
                          return (
                            <View key={i} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                              <TouchableOpacity
                                style={{ fontSize: 30, width: 80, height: 80, borderColor: '#fff', }}
                                onPress={() => this.onPress(item)}>
                                <Text
                                  style={{ fontSize: 30, textAlign: 'center', padding: 15, color: this.setColor(index, i) }}>
                                  {item}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          )
                        })
                    }
                  </View>
                )
              })}
        </View>


      </>
    )

    //به دو صورت هم با if  هم با به صورت کاستوم
  }
}
export default App;
