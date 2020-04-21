import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StoreContextProvider from './stores/context';

const RootStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <StoreContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            // Code goes here.
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </StoreContextProvider>
  );
};

export default App;
