import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import globalStyles from '../style/globalStyles';

export default function Menu() {
  return (
    <View style={globalStyles.container}>
      <Text>Menu</Text>
      <StatusBar style="auto" />
    </View>
  );
}