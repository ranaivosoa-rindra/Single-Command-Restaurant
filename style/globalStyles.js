import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A051C',
        alignItems: 'center',
      },
      logoImage: {
        width: 350,
        height: 350
      },
      menuButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        flexDirection: "row",
        width: 203,
        height: 53,
        borderRadius: 25,
        marginTop: 150
      },
      cutleryIcon: {
        paddingRight: 15
      },
      menuTextButton: {
        fontSize: 18,
        color: "#222222",
        marginRight: 20,    
        fontWeight: "700"
      }
})

export default globalStyles;