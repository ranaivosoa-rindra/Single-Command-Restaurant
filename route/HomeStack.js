import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Command from "../screens/Command";

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            headerShown: false
        }
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
            headerShown: false
        },
    },
    Command: {
        screen: Command,
        navigationOptions: {
            headerTintColor: "#fff", // -> text Color
            headerStyle: {
                backgroundColor: "#151B54"
            }
        },
    },
}

const HomeStack = createStackNavigator(screens);
const Navigator = createAppContainer(HomeStack);
export default Navigator;