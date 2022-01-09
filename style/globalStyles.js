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
        marginTop: 180
      },
      cutleryIcon: {
        paddingRight: 15
      },
      menuTextButton: {
        fontSize: 18,
        color: "#222222",
        marginRight: 20,    
        fontWeight: "700"
      },
      iconHeaderView: {
        flexDirection: "column",
        position: "absolute",
        left: 0
      },
      homeIcon: {
          paddingTop: 13,
          paddingLeft: 13
      },
      menuContainer: {
        flex: 1,
        backgroundColor: "#0A051C"
      },
      allItemsContainer: {
          height: "70%",
          marginTop: 72
      },
      firstItemContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          marginBottom: 30
      },
    hamburgerImage:{
        width: 130,
        height: 100,
        marginTop: 5
    },
    itemName: {
        fontSize: 18,
        fontWeight: "700",
        color: "#E9CD7D"
    },
    listIngredients:{
        paddingTop: 5,
        paddingLeft: 40
    },
    oneIngredientView:{
        flexDirection: "row"
    },
    point: {
        width: 5,
        height: 5,
        borderRadius: 10,
        backgroundColor: "#E9CD7D",
        marginTop: 10,
        marginRight: 7
    },
    ingredientsText: {
        fontSize: 16,
        color: "#E9CD7D"
    },
    pizzaImage: {
        width: 110,
        height: 110,
        marginTop: 5
    },
    secondItemText: {
        marginRight: 10
    },
    pitaImage:{
        width: 110,
        height: 70,
        marginTop: 15,
    },
    friedChickenImage:{
        width: 100,
        height: 100,
    },
    choiceView:{
        alignItems: "center",
        marginTop: 22
    },
    input: {
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: "#fff",
        alignSelf: "stretch",
        marginHorizontal: 90,
        paddingLeft: 10,
        borderRadius: 9,
        paddingVertical: 6,
    },
    proceedButton:{
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "#0A051C",
        borderColor: "#707070",
        marginTop: 16,
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 25
    },
    proceedButtonText:{
        fontSize: 18,
        color: "#D8DACE"
    },
    commandView:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    headerText:{
        color: "#fff",
        fontSize: 26
    },
    commandResultView: {
        marginTop: 20,
        backgroundColor: "#E9CD7D",
        paddingHorizontal: 18,
        paddingVertical: 18,
        borderRadius: 25
    },
    commandResultText:{
        color: "#800000",
        fontSize: 21,
        fontWeight: "700"
    },
    deleteView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    deleteButton:{
        flexDirection: "row",
        backgroundColor: "#CD1F01",
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10
    },
    trashIcon:{
        paddingRight: 10,
    },
    deleteText:{
        fontSize: 18,
        color: "#fff"
    }
})

export default globalStyles;