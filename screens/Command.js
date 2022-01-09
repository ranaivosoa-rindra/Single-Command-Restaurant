import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import globalStyles from '../style/globalStyles';

export default function Command() {
  return (
    <View style={globalStyles.container}>
      {/* <Image
          source={require("../assets/fried-chicken-french-fries-white-plate_n.png")}
          style = {globalStyles.friedChickenImage}
      /> */}
      {/* <Image
                source={require("../assets/hamburger_lemon.png")}
                style = {globalStyles.hamburgerImage}
            /> */}
    <Image
        source={require("../assets/newTacos.png")}
        style = {globalStyles.pitaImage}
    />
      <StatusBar style="auto" />
    </View>
  );
}