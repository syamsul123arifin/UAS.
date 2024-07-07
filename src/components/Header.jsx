import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: '#FFD700',
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
        elevation: 10,
      }}>
      <View style={{marginVertical: 10}}>
        <Icon name="menu-outline" size={30} color="#1d477b" />
      </View>

      <Text style={{color: '#1d477b', fontSize: 18, fontWeight: 'bold'}}>
        Kita Kerja
      </Text>
      <Text style={{color: '#1d477b'}}>Temukan Pekerjaan Impian</Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 10,
            flex: 1,
            borderRadius: 7,
            elevation: 2,
          }}
          value={props.cari}
          onChangeText={text => {
            props.setCari(text);
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 20,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            elevation: 2,
          }}>
          <Icon name="search-outline" size={25} color="#1d477b" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
