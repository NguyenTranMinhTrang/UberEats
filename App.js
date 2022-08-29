import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Order from './src/screens/Order';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Order />
    </View>
  );
}


