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

const Card = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FFFFFF',
        elevation: 2,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 7,
        marginTop: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{backgroundColor: '#FF4500', borderRadius: 7}}>
          <Image source={props.image} style={{width: 50, height: 50}} />
        </View>

        <View style={{marginLeft: 10}}>
          <Text>{props.namaPerusahaan}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.nama}</Text>
            {props.new && (
              <View
                style={{
                  backgroundColor: '#FF4500',
                  borderRadius: 7,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{color: '#FFFFFF'}}>NEW</Text>
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View
          style={{
            backgroundColor: '#FF4500',
            borderRadius: 7,
            paddingVertical: 5,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>{props.category1}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FF4500',
            borderRadius: 7,
            paddingVertical: 5,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: '#FFFFFF'}}>{props.category2}</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginHorizontal: 5,
            flex: 1,
          }}>
          <Text>
            ${props.gaji.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}/month
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
