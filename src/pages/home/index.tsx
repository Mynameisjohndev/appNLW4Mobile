import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


function Home() {
  const { user } = useContext(AuthContext);
  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
}

export default Home;