import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import globalStyles from '../style/globalStyles';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Image
          source={require("../assets/restaurant_logo.png")}
          style = {globalStyles.logoImage}
      />
        <TouchableOpacity
            style = {globalStyles.menuButton}
            onPress={() => {
                navigation.navigate("Menu")
            }}
        >
        <Icon
            name = "cutlery"
            type = 'font-awesome'
            size = {24}
            style = {globalStyles.cutleryIcon}
            color = {"#222222"}
        />
        <Text style = {globalStyles.menuTextButton}>
            Menu
        </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
