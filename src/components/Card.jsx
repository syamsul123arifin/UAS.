import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.companyLogo} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.companyName}>{props.namaPerusahaan}</Text>

        <View style={styles.jobTitleContainer}>
          <Text style={styles.jobTitle}>{props.nama}</Text>
          {props.new && (
            <View style={styles.newTag}>
              <Text style={styles.newTagText}>NEW</Text>
            </View>
          )}
        </View>

        <View style={styles.categoriesContainer}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>{props.category1}</Text>
          </View>
          <View style={[styles.category, { marginLeft: 10 }]}>
            <Text style={styles.categoryText}>{props.category2}</Text>
          </View>
          <View style={styles.salaryContainer}>
            <Text style={styles.salaryText}>
              ${props.gaji.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              /month
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageContainer: {
    backgroundColor: '#FFD700',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  companyLogo: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    marginLeft: 15,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  newTag: {
    backgroundColor: '#FFD700',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newTagText: {
    color: '#1d477b',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    backgroundColor: '#FFD700',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  categoryText: {
    color: '#1d477b',
  },
  salaryContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  salaryText: {
    fontWeight: 'bold',
  },
});

export default Card;
