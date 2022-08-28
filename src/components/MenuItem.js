import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MenuItem = ({ dish }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.subtitle} numberOfLines={2} >{dish.description}</Text>
                <Text>$ {dish.price}</Text>
            </View>
            {
                dish.image &&
                <View style={styles.containerImage}>
                    <Image
                        source={{ uri: dish.image }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    containerTitle: {
        flex: 0.7,
    },
    containerImage: {
        flex: 0.3,
        alignItems: "flex-end",
    },
    name: {
        fontWeight: "500",
        fontSize: 17,
        letterSpacing: 0.5,
        lineHeight: 20
    },
    subtitle: {
        color: "gray",
        lineHeight: 20
    },
    image: {
        width: 90,
        height: 90
    }
});

export default MenuItem;