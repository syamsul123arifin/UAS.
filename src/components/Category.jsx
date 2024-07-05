import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Category = props => {
  return (
    <View>
      <Text style={{fontWeight: 'bold'}}>Category</Text>
      <FlatList
        data={props.category}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              backgroundColor: '#FFFFFF',
              elevation: 2,
              marginVertical: 10,
              width: 100,
              height: 100,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name={item.icon} size={35} color="#1d477b" />
            </View>
            <Text style={{textAlign: 'center', marginTop: 10}}>
              {item.nama}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default Category;
