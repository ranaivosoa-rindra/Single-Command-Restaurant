import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import globalStyles from '../style/globalStyles';

export default function Command() {
  return (
    <View style={globalStyles.container}>
      <Text>Command!</Text>
      <StatusBar style="auto" />
    </View>
  );
}