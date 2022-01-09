import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import globalStyles from '../style/globalStyles';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
