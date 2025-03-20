import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Speed } from "../screens/Speed";
import { Temperature } from "../screens/Temperature";

const Stack = createNativeStackNavigator()

export function Approutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Temperature' component={Temperature}/>
                <Stack.Screen name='Speed' component={Speed}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
