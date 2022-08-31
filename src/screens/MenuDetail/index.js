import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import data from "../../../assets/data/restaurants.json";

const restaurant = data[0];
const dish = restaurant.dishes[0];

const MenuDetail = ({ route, navigation /* , dish */ }) => {

    const [quality, setQuality] = useState(1);

    // call api
    const id = route.params?.id;

    console.log("Dish id: ", id);

    const getTotal = () => {
        return (quality * dish.price).toFixed(2);
    }

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
            <View style={styles.infoContainer} >
                <Text style={styles.title}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.minusAddButton}
                    onPress={() => {
                        if (quality > 1) {
                            setQuality(quality - 1);
                        }
                    }}
                >
                    <AntDesign name="minus" size={35} color="black" />
                </TouchableOpacity>
                <Text style={styles.number}>{quality}</Text>
                <TouchableOpacity
                    style={styles.minusAddButton}
                    onPress={() => setQuality(quality + 1)}
                >
                    <AntDesign name="plus" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.basketContainer}
                onPress={() => {
                    navigation.navigate("Basket")
                }}
            >
                <Text style={styles.basketString}>Add {quality} to basket</Text>
            </TouchableOpacity>
            <Text style={[styles.basketString, styles.price]}>{getTotal()} $</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        marginVertical: 30,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    infoContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    title: {
        fontSize: 22,
        fontWeight: "600"
    },
    description: {
        marginVertical: 20,
        color: "gray"
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        justifyContent: "center"
    },
    minusAddButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    number: {
        marginHorizontal: 10,
        fontWeight: "500"
    },
    basketContainer: {
        marginTop: "auto",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15
    },
    basketString: {
        fontSize: 16,
        color: "white"
    },
    price: {
        position: "absolute",
        bottom: 25,
        right: 20
    }

});

export default MenuDetail;