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
            ourbottun: [
                { name: 'btn1' },
                { name: 'btn2' },
                { name: 'btn3' },
                { name: 'btn4' },
            ],
            bottuncolor: [
                "red",
                "orange",
                "green",
                "yellow"
            ],
            statusbottun: 0
        };
    }




    render() {
        return (
            // <TouchableOpacity style={{}}/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                {
                    this.state.ourbottun.map(
                        (item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{ backgroundColor: 'gray', padding: '10', margin: '10', borderRadius: 10, }}
                                    onPress={() => this.onPress}
                                    ><Text style={{fontSize:20}}>{this.state.}
                    
                                    }
                                    )
                                    }
            </View>
                            )

                            //به دو صورت هم با if  هم با به صورت کاستوم
                        }
}
export default App;
