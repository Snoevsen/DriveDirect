import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function CarsScreen() {
  const rentedCars = [
    {
      id: '1',
      name: 'Tesla Model 3',
      details: 'Plate: 8YXZ29\nReturn 4. Oct 6:00 PM',
      status: 'Active',
      mockupText: 'TESLA MODEL 3 MOCKUP',
      isSolidButton: true, // First card has a filled black button
    },
    {
      id: '2',
      name: 'BMW X3',
      details: 'Plate: 4KLM18\nPick up 9. Oct 8:30 PM',
      status: 'Reserved',
      mockupText: 'BMW X3 MOCKUP',
      isSolidButton: false,
    },
    {
      id: '3',
      name: 'Hyundai i30',
      details: 'Plate: 7QRT51\nPick up 10. Jan 10:00 PM',
      status: 'Reserved',
      mockupText: 'HYUNDAI I30 MOCKUP',
      isSolidButton: false,
    },
  ];

  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>My Rented Cars</Text>
          <Text style={styles.headerSubtitle}>Overview of vehicles currently assigned to you</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3 Cars</Text>
        </View>
      </View>

      {/* Scrollable Rented Cars List */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {rentedCars.map((car) => (
          <View key={car.id} style={styles.carCard}>
            {/* Image Placeholder Box */}
            <View style={styles.imagePlaceholder}>
              <View style={styles.iconBox}>
                <Text style={styles.xIcon}>×</Text>
              </View>
              <Text style={styles.mockupLabel}>{car.mockupText}</Text>
            </View>

            {/* Car Info Row */}
            <View style={styles.infoRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carDetails}>{car.details}</Text>
              </View>
              
              {/* Status Badge */}
              <View style={[
                styles.statusBadge, 
                car.status === 'Active' ? styles.activeBadge : styles.reservedBadge
              ]}>
                <Text style={[
                  styles.statusText, 
                  car.status === 'Active' ? styles.activeText : styles.reservedText
                ]}>
                  {car.status}
                </Text>
              </View>
            </View>

            {/* Non-functional View Car Button */}
            <TouchableOpacity 
              style={[
                styles.viewCarButton, 
                car.isSolidButton ? styles.solidButton : styles.outlineButton
              ]} 
              activeOpacity={1}
            >
              <Text style={[
                styles.viewCarButtonText, 
                car.isSolidButton ? styles.solidButtonText : styles.outlineButtonText
              ]}>
                VIEW CAR
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
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
  badge: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#f9fafb',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
  },
  scrollContainer: {
    paddingBottom: 24,
  },
  carCard: {
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  imagePlaceholder: {
    height: 130,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  xIcon: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
    lineHeight: 18,
  },
  mockupLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 0.5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  carName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  carDetails: {
    fontSize: 13,
    color: '#4b5563',
    marginTop: 3,
    lineHeight: 18,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
  },
  activeBadge: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  reservedBadge: {
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  activeText: {
    color: '#ffffff',
  },
  reservedText: {
    color: '#374151',
  },
  viewCarButton: {
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  solidButton: {
    backgroundColor: '#111827',
  },
  outlineButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#111827',
  },
  viewCarButtonText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  solidButtonText: {
    color: '#ffffff',
  },
  outlineButtonText: {
    color: '#111827',
  },
});