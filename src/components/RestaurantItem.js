import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const RestaurantItem = ({ restaurant, navigation }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={() => {
                navigation.navigate("RestaurantDetail", { id: restaurant.id })
            }}
        >
            <Image
                source={{ uri: restaurant.image }}
                style={styles.image}
            />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>$ {restaurant.deliveryFee} . {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 10
    },
    subtitle: {
        color: "gray"
    },
    rating: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        marginLeft: "auto",
    }

});

export default RestaurantItem;