import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen component={Home} name="Home" />
            <Stack.Screen
                component={RestaurantDetail}
                name="RestaurantDetail"
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Navigator;