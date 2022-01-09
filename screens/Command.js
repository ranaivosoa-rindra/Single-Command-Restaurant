import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import globalStyles from '../style/globalStyles';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Command({navigation}) {

    const [command, setCommand] = useState("");

    useEffect(() => {
        getCommand();
    },[])

    const getCommand = async() => {
        let v = await AsyncStorage.getItem("MyCommand");
        if(v != null){
            try {
                setCommand(v)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const deleteCommand = async() => {
        try {
           await AsyncStorage.removeItem("MyCommand");
           console.log("Command Removed")
           navigation.navigate("Menu")
        } catch (error) {
            console.log(error)
        }finally{
            setCommand("Your Choice")
        }
    }


  return (
    <View style={globalStyles.container}>
        <View style = {globalStyles.commandView}>
            <Text style = {globalStyles.headerText}>
            Your command is
            </Text>
            <View style = {globalStyles.commandResultView}>
                <Text style = {globalStyles.commandResultText}>
                    {command}
                </Text>
            </View>
        </View>
        <View style = {globalStyles.deleteView}>
            <TouchableOpacity
                onPress={() => {
                    deleteCommand()
                }}
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