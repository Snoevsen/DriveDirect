import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ExploreScreen() {
  const cars = [
    {
      id: '1',
      name: 'VW GOLF',
      details: '5 Seats • Hatchback',
      price: '$15/hr',
      mockupText: 'VW GOLF MOCKUP',
    },
    {
      id: '2',
      name: 'Nissan Qashqai',
      details: '5 Seats • AWD',
      price: '$18/hr',
      mockupText: 'NISSAN QASHQAI MOCKUP',
    },
    {
      id: '3',
      name: 'Toyota Aygo',
      details: '4 Seats',
      price: '$10/hr',
      mockupText: 'TOYOTA AYGO MOCKUP',
    },
  ];

  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Available Cars</Text>
          <Text style={styles.headerSubtitle}>Overview of available vehicles</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>12 Available</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {cars.map((car) => (
          <View key={car.id} style={styles.carCard}>
            <View style={styles.imagePlaceholder}>
              <View style={styles.iconBox}>
                <Text style={styles.xIcon}>×</Text>
              </View>
              <Text style={styles.mockupLabel}>{car.mockupText}</Text>
            </View>

            <View style={styles.infoRow}>
              <View>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carDetails}>{car.details}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.carPrice}>{car.price}</Text>
                <Text style={styles.taxText}>excl. tax</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.selectButton} activeOpacity={1}>
              <Text style={styles.selectButtonText}>VIEW DETAILS & SELECT</Text>
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
    marginTop: 2,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  carPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  taxText: {
    fontSize: 11,
    color: '#9ca3af',
  },
  selectButton: {
    borderWidth: 1.5,
    borderColor: '#111827',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  selectButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: 0.5,
  },
});