import React from 'react';
import { AuthProvider } from './src/contexts/ChallengesContext';

import Home from  './src/pages/home/index';

console.disableYellowBox = true;
function App() {
  return (
      <AuthProvider>
        <Home/>
      </AuthProvider>
  );
}

export default App;
