import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { AuthProvider } from './src/contexts/ChallengesContext';

import Home from  './src/pages/Home';

function App() {
  return (
      <AuthProvider>
        <Home/>
      </AuthProvider>
  );
}

export default App;
