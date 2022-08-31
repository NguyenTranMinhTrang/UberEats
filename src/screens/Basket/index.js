import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Restaurant from "../../../assets/data/restaurants.json";

const restaurant = Restaurant[0];

const BasketItem = ({ dish }) => {
    return (
        <View style={styles.basketContainer}>
            <View style={styles.quality}>
                <Text>1</Text>
            </View>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.price}>$ {dish.price}</Text>
        </View>
    )
}


const Basket = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.goBack();
                }}

            >
                <Ionicons name="arrow-back" size={40} />
            </TouchableOpacity>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.text}>Your Items</Text>
            <FlatList
                data={restaurant.dishes}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => {
                    return (
                        <View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20 }}>
                                <Text style={{ color: "gray" }}>Subtotal</Text>
                                <Text>$ 18.99</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "gray" }}>Total</Text>
                                <Text>$ 33.33</Text>
                            </View>

                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return <BasketItem dish={item} />
                }}
            />
            <TouchableOpacity style={styles.nextButton}>
                <Text style={{ color: "white" }}>Next . 74.77$</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    button: {
        marginVertical: 10,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: "center",

    },
    title: {
        fontSize: 22,
        fontWeight: "600"
    },
    text: {
        fontWeight: "600",
        marginVertical: 10
    },
    basketContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    quality: {
        height: 30,
        width: 30,
        borderRadius: 2,
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontWeight: "600",
        marginLeft: 5
    },
    price: {
        marginLeft: "auto",
    },
    nextButton: {
        marginTop: "auto",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    }
});

export default Basket;