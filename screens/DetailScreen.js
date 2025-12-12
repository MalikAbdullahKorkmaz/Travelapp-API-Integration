import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scaleSize, scaleFontSize } from '../utils/responsive';

const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item, type } = route.params;

  const handleBooking = () => {
    Alert.alert(
      'Booking Confirmation',
      `You are about to book ${item.name}. This is a mock booking.`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm Booking',
          onPress: () => Alert.alert('Success', `${item.name} booked successfully!`),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={item.image} style={styles.mainImage} />

        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.typeText}>
            {type === 'hotel' ? 'Hotel' : 'Car Rental'}
          </Text>
          <Text style={styles.details}>{item.details}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker" size={scaleSize(20)} color="#FF6B6B" />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
            <Text style={styles.mapPlaceholder}>
              [Map Placeholder: Actual map integration would go here]
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Booking Information</Text>
            <Text style={styles.bookingText}>
              To register, please provide your name, contact information, and payment details.
              A full registration form would be implemented here.
            </Text>
            <Text style={styles.price}>
              Price: ${item.price} {type === 'hotel' ? '/ night' : '/ day'}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: scaleSize(100), // To make space for the fixed footer
  },
  mainImage: {
    width: '100%',
    height: scaleSize(300),
    resizeMode: 'cover',
  },
  content: {
    padding: scaleSize(20),
  },
  title: {
    fontSize: scaleFontSize(28),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: scaleSize(5),
  },
  typeText: {
    fontSize: scaleFontSize(16),
    color: '#FF6B6B',
    marginBottom: scaleSize(15),
  },
  details: {
    fontSize: scaleFontSize(16),
    color: '#666',
    lineHeight: scaleSize(24),
    marginBottom: scaleSize(20),
  },
  section: {
    marginBottom: scaleSize(20),
    paddingTop: scaleSize(10),
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: scaleSize(10),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleSize(10),
  },
  locationText: {
    marginLeft: scaleSize(10),
    fontSize: scaleFontSize(16),
    color: '#666',
  },
  mapPlaceholder: {
    fontStyle: 'italic',
    color: '#999',
    marginTop: scaleSize(5),
  },
  bookingText: {
    fontSize: scaleFontSize(16),
    color: '#666',
    marginBottom: scaleSize(10),
  },
  price: {
    fontSize: scaleFontSize(22),
    fontWeight: 'bold',
    color: '#333',
    marginTop: scaleSize(10),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: scaleSize(15),
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    alignItems: 'center',
  },
  bookButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: scaleSize(15),
    paddingHorizontal: scaleSize(50),
    borderRadius: scaleSize(30),
    width: '100%',
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: scaleFontSize(18),
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: scaleSize(40),
    left: scaleSize(15),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: scaleSize(20),
    padding: scaleSize(8),
  },
});

export default DetailScreen;
