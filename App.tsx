
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Provider from './src/providers/Provider';
import HomeScreen from './src/screens/HomeScreen';
import DetailAssetScreen from './src/screens/DetailAssetScreen';

export type RootStackParams = {
  Home: undefined;
  DetailAsset: undefined
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailAsset" component={DetailAssetScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
