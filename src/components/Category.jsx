import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Category = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={props.category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconContainer}>
              <Icon name={item.icon} size={35} color="#1d477b" />
            </View>
            <Text style={styles.categoryName}>{item.nama}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  categoryItem: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  categoryIconContainer: {
    backgroundColor: '#FFD700',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    textAlign: 'center',
  },
});

export default Category;
