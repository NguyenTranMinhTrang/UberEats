import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const OrderItem = ({ order }) => {
    return (
        <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "gray", alignItems: "center" }}>
            {/* Image */}
            <View>
                <Image
                    source={{ uri: order.Restaurant.image }}
                    style={{
                        width: 90,
                        height: 90
                    }}

                />
            </View>
            <View style={{ marginLeft: 10, }}>
                <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 5 }}>{order.Restaurant.name}</Text>
                <Text style={{ color: "gray" }}>3 Items . $38.45</Text>
                <Text style={{ color: "gray" }}>{order.Restaurant.updatedAt}</Text>
            </View>
        </View>
    )
}

export default OrderItem;