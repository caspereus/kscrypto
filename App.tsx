import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParams } from './src/lib/type';
import Provider from './src/providers/Provider';
import HomeScreen from './src/screens/HomeScreen';
import DetailCoinScreen from './src/screens/DetailCoinScreen';
import { LogBox } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParams>();

  LogBox.ignoreAllLogs();

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <NetworkLogger theme='light' /> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailCoin" component={DetailCoinScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
