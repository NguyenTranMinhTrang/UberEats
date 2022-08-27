import React from "react";
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { MenuItem } from "../../components";
import { Ionicons } from '@expo/vector-icons';

const RestaurantDetail = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurant.dishes}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <Image
                                source={{ uri: restaurant.image }}
                                style={styles.image}
                            />
                            <View style={styles.containerTitle}>
                                <Text style={styles.title}>{restaurant.name}</Text>
                                <Text style={styles.subtitle}>$ {restaurant.deliveryFee} . {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
                            </View>
                            <Text style={styles.menu}>Menu</Text>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return <MenuItem dish={item} />
                }}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Ionicons name="arrow-back" size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        aspectRatio: 6 / 3
    },
    containerTitle: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
    subtitle: {
        color: "gray"
    },
    menu: {
        paddingTop: 20,
        paddingLeft: 20,
        color: "gray",
        fontSize: 16
    },
    buttonContainer: {
        position: "absolute",
        top: 30,
        left: 10,
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
});


export default RestaurantDetail;
