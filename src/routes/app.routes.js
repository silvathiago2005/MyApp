import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from '../pages/Home';
import CustomDrawer from "../components/CustomDrawer";

const AppStack = createStackNavigator();

export default function AppRoutes(){
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    )
}