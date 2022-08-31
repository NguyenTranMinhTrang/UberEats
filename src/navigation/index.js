import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";
import Order from "../screens/Order";
import MenuDetail from "../screens/MenuDetail";
import Basket from "../screens/Basket";
import OrderDetail from "../screens/OrderDetail";
import { Foundation, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='TabNavigator'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen component={TabNavigator} name="TabNavigator" />
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list-alt" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Order}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name='restaurant' component={Home} />
            <HomeStack.Screen
                component={RestaurantDetail}
                name="RestaurantDetail"
            />
            <HomeStack.Screen name='MenuDetail' component={MenuDetail} />
            <HomeStack.Screen name='Basket' component={Basket} />
        </HomeStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <OrderStack.Screen name='Orders' component={Order} />
            <OrderStack.Screen component={OrderDetail} name="OrderDetail" />
        </OrderStack.Navigator>
    )
}

export default Navigator;