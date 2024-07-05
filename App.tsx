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
import Category from './src/components/Category';
const App = () => {
  const [cari, setCari] = useState('');
  const [category, setCategory] = useState([
    {nama: 'Programming', icon: 'code-slash'},
    {nama: 'Design', icon: 'brush'},
    {nama: 'Artikel', icon: 'document'},
    {nama: 'copywriter', icon: 'copy'},
  ]);


  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#FF4500'} />
      <Header cari={cari} setCari={setCari} />

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        <Category category={category} />
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
          
          </Text>
          
           
        </View>
      </View>
    </View>
  );
};

export default App;
