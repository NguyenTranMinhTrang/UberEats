import React from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import RestaurantList from "../../../assets/data/restaurants.json";
import { RestaurantItem } from "../../components";

const Home = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={RestaurantList}
                renderItem={({ item }) => {
                    return <RestaurantItem restaurant={item} />
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginVertical: 10
    },
});


export default Home;
