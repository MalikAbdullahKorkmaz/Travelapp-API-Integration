import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useResponsiveDimensions, scaleSize, scaleFontSize } from '../utils/responsive';
import { hotels, cars } from '../data';

const CityDetailScreen = () => {
  const { isLargeTablet, isLandscape } = useResponsiveDimensions();
  const route = useRoute();
  const navigation = useNavigation();
  const { city } = route.params;

  const [activeTab, setActiveTab] = useState('Hotels');

  const cityHotels = hotels.filter((hotel) => hotel.cityId === city.id);
  const cityCars = cars.filter((car) => car.cityId === city.id);

  const renderItem = ({ item, type }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetailScreen', { item, type })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <MaterialCommunityIcons
            name={type === 'hotel' ? 'bed' : 'car'}
            size={scaleSize(24)}
            color="#FF6B6B"
          />
        </View>
        <Text style={styles.cardDetails} numberOfLines={2}>
          {item.details}
        </Text>
        <Text style={styles.cardPrice}>
          {type === 'hotel' ? `$${item.price} / night` : `$${item.price} / day`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{city.name}</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Hotels' && styles.activeTab]}
          onPress={() => setActiveTab('Hotels')}
        >
          <Text style={[styles.tabText, activeTab === 'Hotels' && styles.activeTabText]}>
            Hotels ({cityHotels.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Cars' && styles.activeTab]}
          onPress={() => setActiveTab('Cars')}
        >
          <Text style={[styles.tabText, activeTab === 'Cars' && styles.activeTabText]}>
            Car Rentals ({cityCars.length})
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        {activeTab === 'Hotels' && (
          <FlatList
            data={cityHotels}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderItem({ item, type: 'hotel' })}
            contentContainerStyle={styles.listContent}
            scrollEnabled={false}
          />
        )}
        {activeTab === 'Cars' && (
          <FlatList
            data={cityCars}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderItem({ item, type: 'car' })}
            contentContainerStyle={styles.listContent}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleSize(5),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: scaleSize(50),
    paddingHorizontal: scaleSize(15),
    paddingBottom: scaleSize(15),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    marginRight: scaleSize(10),
  },
  headerTitle: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: scaleSize(10),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    paddingVertical: scaleSize(8),
    paddingHorizontal: scaleSize(20),
    borderRadius: scaleSize(20),
  },
  activeTab: {
    backgroundColor: '#FF6B6B',
  },
  tabText: {
    fontSize: scaleFontSize(16),
    fontWeight: '600',
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scaleSize(15),
  },
  listContent: {
    paddingVertical: scaleSize(10),
    flexDirection: isLargeTablet ? (isLandscape ? 'row' : 'column') : 'column',
    flexWrap: isLargeTablet ? 'wrap' : 'nowrap',
    justifyContent: isLargeTablet ? 'space-between' : 'flex-start',
  },
  card: {
    flexDirection: isLargeTablet ? 'column' : 'row',
    backgroundColor: '#fff',
    borderRadius: scaleSize(10),
    marginBottom: scaleSize(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scaleSize(2) },
    shadowOpacity: 0.1,
    shadowRadius: scaleSize(4),
    elevation: 3,
    overflow: 'hidden',
    width: isLargeTablet ? (isLandscape ? '48%' : '100%') : '100%',
  },
  cardImage: {
    width: isLargeTablet ? '100%' : scaleSize(120),
    height: isLargeTablet ? scaleSize(180) : scaleSize(120),
    resizeMode: 'cover',
  },
  cardContent: {
    flex: 1,
    padding: scaleSize(10),
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: '#333',
  },
  cardDetails: {
    fontSize: scaleFontSize(14),
    color: '#666',
    marginVertical: scaleSize(5),
  },
  cardPrice: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
});

export default CityDetailScreen;
