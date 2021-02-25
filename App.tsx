import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


function App() {
  const [teste, seTeste] = useState(0);
  return (
    <View>
      <StatusBar barStyle="dark-content" />

      <Text>{teste}</Text>
      <Text>Oi</Text>
    </View>
  );
}

export default App;
