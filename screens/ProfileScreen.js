import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const user = {
    name: 'Abdullah Malik Korkmaz',
    email: 'malik@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Istanbul, Turkey',
    avatar: null,
  };

  const stats = [
    { label: 'Trips', value: '12' },
    { label: 'Reviews', value: '28' },
    { label: 'Favorites', value: '45' },
  ];

  const menuItems = [
    { icon: 'bookmark', label: 'Saved Trips', color: '#FF6B6B' },
    { icon: 'history', label: 'Booking History', color: '#FF9500' },
    { icon: 'heart', label: 'Favorites', color: '#FF6B6B' },
    { icon: 'cog', label: 'Settings', color: '#4A90E2' },
    { icon: 'help-circle', label: 'Help & Support', color: '#50C878' },
    { icon: 'logout', label: 'Logout', color: '#999' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            {user.avatar ? (
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <MaterialCommunityIcons
                  name="account"
                  size={60}
                  color="white"
                />
              </View>
            )}
            <TouchableOpacity style={styles.editAvatarButton}>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>

          <View style={styles.contactRow}>
            <MaterialCommunityIcons
              name="phone"
              size={14}
              color="#666"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>{user.phone}</Text>
          </View>

          <View style={styles.contactRow}>
            <MaterialCommunityIcons
              name="map-marker"
              size={14}
              color="#666"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>{user.location}</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              activeOpacity={0.7}
            >
              <View style={styles.menuItemLeft}>
                <View
                  style={[
                    styles.menuItemIcon,
                    { backgroundColor: item.color + '20' },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={20}
                    color={item.color}
                  />
                </View>
                <Text style={styles.menuItemLabel}>{item.label}</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color="#DDD"
              />
            </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 8,
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  contactIcon: {
    marginRight: 8,
  },
  contactText: {
    fontSize: 13,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF6B6B',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  menuContainer: {
    paddingVertical: 12,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  bottomSpacing: {
    height: 20,
  },
});

export default ProfileScreen;

