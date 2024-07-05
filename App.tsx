import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './src/components/Header';

const App = () => {
  const [cari, setCari] = useState('');

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#E9967A'} />
      <Header cari={cari} setCari={setCari} />

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
            
          </Text>
         
          
        </View>
      </View>
    </View>
  );
};

export default App;
