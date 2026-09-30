import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AlertsScreen() {
  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Help</Text>
        <Text style={styles.headerSubtitle}>Get help from emergency services</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Emergency Alert Info Box */}
        <View style={styles.alertBox}>
          <Text style={styles.alertIcon}>⚠️️</Text>
          <Text style={styles.alertTitle}>Emergency Services Dispatch</Text>
          <Text style={styles.alertDescription}>
            Pressing SOS buttons below will immediately transmit your GPS and notify operations.
          </Text>
        </View>

        {/* Big Circular SOS Button */}
        <View style={styles.sosContainer}>
          <TouchableOpacity style={styles.sosButton} activeOpacity={1}>
            <Text style={styles.sosPhoneIcon}>📞</Text>
            <Text style={styles.sosButtonText}>PRESS SOS</Text>
          </TouchableOpacity>
        </View>

        {/* Direct Helplines Section */}
        <Text style={styles.sectionHeader}>Direct Helplines</Text>

        {/* Helpline Card 1 */}
        <TouchableOpacity style={styles.helplineCard} activeOpacity={1}>
          <View style={styles.helplineLeft}>
            <Text style={styles.helplineIcon}>🛡️</Text>
            <Text style={styles.helplineText}>Roadside Assistance</Text>
          </View>
          <Text style={styles.callIcon}>📞</Text>
        </TouchableOpacity>

        {/* Helpline Card 2 */}
        <TouchableOpacity style={styles.helplineCard} activeOpacity={1}>
          <View style={styles.helplineLeft}>
            <Text style={styles.helplineIcon}>🛟</Text>
            <Text style={styles.helplineText}>Report Accident</Text>
          </View>
          <Text style={styles.callIcon}>📞</Text>
        </TouchableOpacity>
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
  scrollContainer: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  alertBox: {
    width: '100%',
    backgroundColor: '#fef2f2',
    borderWidth: 1.5,
    borderColor: '#fca5a5',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  alertIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#991b1b',
    marginBottom: 6,
  },
  alertDescription: {
    fontSize: 13,
    color: '#b91c1c',
    textAlign: 'center',
    lineHeight: 18,
  },
  sosContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 30,
  },
  sosButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff5f5',
    borderWidth: 4,
    borderColor: '#dc2626',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#dc2626',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  sosPhoneIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  sosButtonText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#dc2626',
    letterSpacing: 1,
  },
  sectionHeader: {
    width: '100%',
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  helplineCard: {
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
  helplineLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helplineIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  helplineText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  callIcon: {
    fontSize: 16,
  },
});