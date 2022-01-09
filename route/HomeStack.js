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
        screen: Menu
    },
    Command: {
        screen: Command
    },
}

const HomeStack = createStackNavigator(screens);
const Navigator = createAppContainer(HomeStack);
export default Navigator;