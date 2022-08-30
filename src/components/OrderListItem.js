import React from "react";
import { View, Text } from "react-native";

const OrderListItem = ({ dish }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                padding: 20,
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "gray"
            }}
        >
            <View
                style={{
                    height: 35,
                    width: 35,
                    borderRadius: 5,
                    backgroundColor: "lightgray",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>1</Text>
            </View>
            <Text style={{ fontWeight: "500", marginLeft: 10 }}>{dish.name}</Text>
            <Text style={{ marginLeft: "auto" }}>${dish.price}</Text>
        </View>
    )
}

export default OrderListItem;