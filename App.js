import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantList from "./assets/data/restaurants.json";
import Basket from './src/screens/Basket';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Basket />
    </View>
  );
}


