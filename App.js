import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantDetail from './src/screens/RestaurantDetail';
import RestaurantList from './assets/data/restaurants.json';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RestaurantDetail restaurant={RestaurantList[0]} />
    </View>
  );
}


