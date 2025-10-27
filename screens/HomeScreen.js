import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';

const HomeScreen = ({ navigation }) => {
  const popularDestinations = destinations.slice(0, 3);

  const handleCardPress = (destination) => {
    navigation.navigate('Details', { destination });
  };

  const handleViewAll = () => {
    navigation.navigate('Explore');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Greeting */}
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi, Haikal</Text>
            <Text style={styles.subGreeting}>Let's explore the world</Text>
          </View>
          <View style={styles.profileIcon}>
            <MaterialCommunityIcons
              name="account-circle"
              size={40}
              color="#FF6B6B"
            />
          </View>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>Plan Your Summer!</Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Explore Now</Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={16}
                  color="white"
                  style={{ marginLeft: 8 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bannerIcon}>
              <MaterialCommunityIcons
                name="beach"
                size={60}
                color="rgba(255, 255, 255, 0.3)"
              />
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <Text style={styles.searchPlaceholder}>Search destination...</Text>
          <MaterialCommunityIcons
            name="tune"
            size={20}
            color="#999"
            style={styles.filterIcon}
          />
        </View>

        {/* Popular Destinations Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity onPress={handleViewAll}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards */}
        <View style={styles.cardsContainer}>
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onPress={handleCardPress}
            />
          ))}
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 14,
    color: '#999',
  },
  profileIcon: {
    marginLeft: 12,
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  banner: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 12,
  },
  bannerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  bannerIcon: {
    marginLeft: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    flex: 1,
    color: '#999',
    fontSize: 14,
  },
  filterIcon: {
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  cardsContainer: {
    marginBottom: 12,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default HomeScreen;

