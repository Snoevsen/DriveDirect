import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Profile name</Text>
        <Text style={styles.headerSubtitle}>See personal data and historical rentals</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Profile Picture Placeholder */}
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicCircle}>
            <View style={styles.iconBox}>
              <Text style={styles.xIcon}>×</Text>
            </View>
            <Text style={styles.profilePicLabel}>PROFILE PIC</Text>
          </View>
        </View>

        {/* Menu Options */}
        <TouchableOpacity style={styles.menuCard} activeOpacity={1}>
          <View style={styles.menuLeft}>
            <Text style={styles.menuIcon}>👤</Text>
            <Text style={styles.menuText}>Personal information</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard} activeOpacity={1}>
          <View style={styles.menuLeft}>
            <Text style={styles.menuIcon}>📖</Text>
            <Text style={styles.menuText}>Rental history</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard} activeOpacity={1}>
          <View style={styles.menuLeft}>
            <Text style={styles.menuIcon}>⚠</Text>
            <Text style={styles.menuText}>Antecedent reports</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Logout Button at Bottom */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.logoutButton} activeOpacity={1}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  scrollContainer: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  profilePicContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f1f5f9',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  xIcon: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
    lineHeight: 16,
  },
  profilePicLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 0.5,
  },
  menuCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 14,
  },
  menuText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  footerContainer: {
    paddingVertical: 12,
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#111827',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#ffffff',
  },
});