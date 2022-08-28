import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuDetail from './src/screens/MenuDetail';
import RestaurantList from "./assets/data/restaurants.json";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MenuDetail dish={RestaurantList[0].dishes[0]} />
    </View>
  );
}


