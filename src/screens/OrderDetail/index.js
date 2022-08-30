import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import order from "../../../assets/data/orders.json";
import restaurant from "../../../assets/data/restaurants.json";
import { Ionicons } from '@expo/vector-icons';
import { OrderListItem } from "../../components";


const data = order[0];
const dishes = restaurant[0].dishes;

const OrderDetail = () => {

    return (
        <View>
            {/* Button to navigation */}
            <View
                style={{
                    marginVertical: 20,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ fontWeight: "600", fontSize: 16 }}>Order</Text>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        left: 10
                    }}
                >
                    <Ionicons name="chevron-back" size={35} color="#00bfff" />
                    <Text style={{ color: "#00bfff", fontSize: 16 }}>Back</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={dishes}
                showsVerticalScrollIndicator={false}
                /* Header */
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <Image
                                source={{ uri: data.Restaurant.image }}
                                style={{
                                    width: "100%",
                                    aspectRatio: 6 / 4,
                                    marginBottom: 15
                                }}
                            />
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "600", fontSize: 20 }}>{data.Restaurant.name}</Text>
                                <Text style={{ color: "gray", marginVertical: 10, fontSize: 12 }}>{data.status} . {data.updatedAt}</Text>
                                <Text style={{ fontWeight: "600", fontSize: 20 }}>Your order</Text>
                            </View>

                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return <OrderListItem dish={item} />
                }}
            />

        </View>
    )
}

export default OrderDetail;