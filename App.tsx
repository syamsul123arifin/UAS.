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
import Card from './src/components/Card';
const App = () => {
  const [cari, setCari] = useState('');
  const [category, setCategory] = useState([
    {nama: 'Programming', icon: 'code-slash'},
    {nama: 'Design', icon: 'brush'},
    {nama: 'Artikel', icon: 'document'},
    {nama: 'Copywriter', icon: 'copy'},
  ]);

  const [pekerjaan, setPekerjaan] = useState([
    {
      nama: 'FrontAnd Developer',
      image: require('./src/images/insia.png'),
      namaPerusahaan: 'Kita Kerja',
      new: true,
      category1: 'Web Design',
      category2: 'Illustration',
      gaji: 10000,
    },
    {
      nama: 'UI/UX Designer',
      image: require('./src/images/insia.png'),
      namaPerusahaan: 'Kita Kerja',
      new: true,
      category1: 'Web Design',
      category2: 'Illustration',
      gaji: 10000,
    },
    {
      nama: 'Admin',
      image: require('./src/images/insia.png'),
      namaPerusahaan: 'Kita Kerja',
      new: true,
      category1: 'Web Design',
      category2: 'Illustration',
      gaji: 5000,
    },
    {
      nama: 'Mobile App Dev',
      image: require('./src/images/insia.png'),
      namaPerusahaan: 'Kita Kerja',
      new: false,
      category1: 'Web Design',
      category2: 'Illustration',
      gaji: 15000,
    },
    {
      nama: 'Backand Developer',
      image: require('./src/images/insia.png'),
      namaPerusahaan: 'Kita Kerja',
      new: false,
      category1: 'Web Design',
      category2: 'Illustration',
      gaji: 10000,
    },
  ]);

  // useEffect(() => {
  //   console.log(cari);
  // }, [cari]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#FF4500'} />
      <Header cari={cari} setCari={setCari} />

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        <Category category={category} />
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
            Pekerjaan Terbaru
          </Text>
          <FlatList
            data={pekerjaan}
            renderItem={({item}) => (
              <Card
                nama={item.nama}
                image={item.image}
                namaPerusahaan={item.namaPerusahaan}
                new={item.new}
                category1={item.category1}
                category2={item.category2}
                gaji={item.gaji}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
