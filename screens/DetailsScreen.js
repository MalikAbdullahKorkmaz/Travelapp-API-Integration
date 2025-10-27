import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const DetailsScreen = ({ route, navigation }) => {
  const { destination } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const handleBooking = () => {
    alert(`Booking for ${destination.title} confirmed!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Image Header with Back Button */}
        <View style={styles.imageContainer}>
          <Image
            source={destination.image}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleFavoritePress}
          >
            <MaterialCommunityIcons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorite ? '#FF6B6B' : 'white'}
            />
          </TouchableOpacity>
        </View>

        {/* Content Container */}
        <View style={styles.contentContainer}>
          {/* Title and Location */}
          <View style={styles.titleSection}>
            <View style={styles.titleRow}>
              <View style={styles.titleColumn}>
                <Text style={styles.title}>{destination.title}</Text>
                <View style={styles.locationRow}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={16}
                    color="#FF6B6B"
                  />
                  <Text style={styles.location}>{destination.country}</Text>
                </View>
              </View>
              <View style={styles.ratingBadge}>
                <MaterialCommunityIcons
                  name="star"
                  size={18}
                  color="#FF9500"
                />
                <Text style={styles.rating}>{destination.rating}</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{destination.description}</Text>
          </View>

          {/* Coordinates */}
          <View style={styles.coordinatesSection}>
            <Text style={styles.sectionTitle}>Location Coordinates</Text>
            <View style={styles.coordinateRow}>
              <View style={styles.coordinateItem}>
                <Text style={styles.coordinateLabel}>Latitude</Text>
                <Text style={styles.coordinateValue}>
                  {destination.coordinates.lat.toFixed(4)}
                </Text>
              </View>
              <View style={styles.coordinateItem}>
                <Text style={styles.coordinateLabel}>Longitude</Text>
                <Text style={styles.coordinateValue}>
                  {destination.coordinates.lng.toFixed(4)}
                </Text>
              </View>
            </View>
          </View>

          {/* Ticket Options */}
          <View style={styles.ticketsSection}>
            <Text style={styles.sectionTitle}>Available Tickets</Text>
            
            {/* Ticket 1 */}
            <TouchableOpacity
              style={[
                styles.ticketCard,
                selectedTicket === 1 && styles.ticketCardSelected,
              ]}
              onPress={() => setSelectedTicket(1)}
            >
              <View style={styles.ticketHeader}>
                <View style={styles.ticketAirline}>
                  <Text style={styles.ticketAirlineCode}>NL</Text>
                  <Text style={styles.ticketAirlineName}>Netherlands</Text>
                </View>
                <View style={styles.ticketTime}>
                  <Text style={styles.ticketTimeValue}>5:30pm</Text>
                  <Text style={styles.ticketTimeLabel}>Mon, 23 Jun</Text>
                </View>
                <MaterialCommunityIcons
                  name="airplane"
                  size={20}
                  color="#FF6B6B"
                />
                <View style={styles.ticketTime}>
                  <Text style={styles.ticketTimeValue}>3:30am</Text>
                  <Text style={styles.ticketTimeLabel}>Tue, 24 Jun</Text>
                </View>
              </View>
              <View style={styles.ticketFooter}>
                <Text style={styles.ticketPrice}>${destination.price}</Text>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color={selectedTicket === 1 ? '#FF6B6B' : '#DDD'}
                />
              </View>
            </TouchableOpacity>

            {/* Ticket 2 */}
            <TouchableOpacity
              style={[
                styles.ticketCard,
                selectedTicket === 2 && styles.ticketCardSelected,
              ]}
              onPress={() => setSelectedTicket(2)}
            >
              <View style={styles.ticketHeader}>
                <View style={styles.ticketAirline}>
                  <Text style={styles.ticketAirlineCode}>NL</Text>
                  <Text style={styles.ticketAirlineName}>Netherlands</Text>
                </View>
                <View style={styles.ticketTime}>
                  <Text style={styles.ticketTimeValue}>5:30pm</Text>
                  <Text style={styles.ticketTimeLabel}>Mon, 23 Jun</Text>
                </View>
                <MaterialCommunityIcons
                  name="airplane"
                  size={20}
                  color="#FF6B6B"
                />
                <View style={styles.ticketTime}>
                  <Text style={styles.ticketTimeValue}>3:30am</Text>
                  <Text style={styles.ticketTimeLabel}>Tue, 24 Jun</Text>
                </View>
              </View>
              <View style={styles.ticketFooter}>
                <Text style={styles.ticketPrice}>${destination.price + 200}</Text>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color={selectedTicket === 2 ? '#FF6B6B' : '#DDD'}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.floatingContainer}>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBooking}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
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
  imageContainer: {
    position: 'relative',
    width: width,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
6,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
    padding: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
    padding: 8,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  titleSection: {
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleColumn: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  ratingBadge: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF9500',
    marginLeft: 4,
  },
  descriptionSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  coordinatesSection: {
    marginBottom: 24,
  },
  coordinateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coordinateItem: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  coordinateLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  coordinateValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  ticketsSection: {
    marginBottom: 24,
  },
  ticketCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#F0F0F0',
  },
  ticketCardSelected: {
    borderColor: '#FF6B6B',
    backgroundColor: '#FFF5F5',
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ticketAirline: {
    alignItems: 'center',
  },
  ticketAirlineCode: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B6B',
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  ticketAirlineName: {
    fontSize: 10,
    color: '#666',
  },
  ticketTime: {
    alignItems: 'center',
    flex: 1,
  },
  ticketTimeValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  ticketTimeLabel: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  ticketPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B6B',
  },
  bottomSpacing: {
    height: 100,
  },
  floatingContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  bookButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default DetailsScreen;

