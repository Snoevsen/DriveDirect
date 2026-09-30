/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

// Import your separate screen files
import ExploreScreen from './screens/ExploreScreen';
import CarsScreen from './screens/CarsScreen';
import HelpScreen from './screens/HelpScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState(0);

  const renderMainView = () => {
    switch (activeTab) {
      case 0:
        return <ExploreScreen />;
      case 1:
        return <CarsScreen />;
      case 2:
        return <HelpScreen />;
      case 3:
        return <ProfileScreen />;
      default:
        return <ExploreScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderMainView()}
      </View>

      <View style={[styles.navBar, { paddingBottom: Math.max(safeAreaInsets.bottom, 10) }]}>
        <TouchableOpacity style={styles.navButton} onPress={() => setActiveTab(0)}>
          <Text style={[styles.navText, activeTab === 0 && styles.activeNavText]}>🔍</Text>
          <Text style={[styles.navLabel, activeTab === 0 && styles.activeNavText]}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => setActiveTab(1)}>
          <Text style={[styles.navText, activeTab === 1 && styles.activeNavText]}>🚗</Text>
          <Text style={[styles.navLabel, activeTab === 1 && styles.activeNavText]}>Your Cars</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => setActiveTab(2)}>
          <Text style={[styles.navText, activeTab === 2 && styles.activeNavText]}>❓</Text>
          <Text style={[styles.navLabel, activeTab === 2 && styles.activeNavText]}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => setActiveTab(3)}>
          <Text style={[styles.navText, activeTab === 3 && styles.activeNavText]}>👤</Text>
          <Text style={[styles.navLabel, activeTab === 3 && styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 22,
    opacity: 0.5,
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    opacity: 1,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default App;