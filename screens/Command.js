import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import globalStyles from '../style/globalStyles';

export default function Command() {
  return (
    <View style={globalStyles.container}>
        <View style = {globalStyles.commandView}>
            <Text style = {globalStyles.headerText}>
            Your command is
            </Text>
            <View style = {globalStyles.commandResultView}>
                <Text style = {globalStyles.commandResultText}>
                    Fried chicken wings
                </Text>
            </View>
        </View>
        <View style = {globalStyles.deleteView}>
            <TouchableOpacity
                onPress={() => console.log("Deleted")}
                style = {globalStyles.deleteButton}
            >
            <Icon
                name = "trash"
                type = "font-awesome"
                size = {24}
                style = {globalStyles.trashIcon}
                color = {"#fff"}
            />
                <Text style = {globalStyles.deleteText}>
                Delete command
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}