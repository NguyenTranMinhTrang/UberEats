import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import data from "../../../assets/data/orders.json";
import { OrderItem } from "../../components";

const Order = () => {
    console.log(data);
    return (
        <View style={{ padding: 10 }}>
            <View
                style={{
                    marginVertical: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text style={styles.title}>Your Orders</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return <OrderItem order={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "600",
    }
});

export default Order;