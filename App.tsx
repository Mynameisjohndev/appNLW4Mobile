import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { AuthProvider } from './src/contexts/auth';

import Home from './src/pages/home/index';

function App() {
  return (
    <View>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </View>
  );
}

export default App;
