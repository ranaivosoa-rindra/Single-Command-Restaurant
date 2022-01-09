import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native';
import { Icon } from 'react-native-elements';
import globalStyles from '../style/globalStyles';

export default function Menu({navigation}) {
  return (
    <TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss();
        }}
    >
    <View 
        style={globalStyles.menuContainer}
    >
      <View style = {globalStyles.iconHeaderView}>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Home")
            }}
        >
            <Icon
                name = "home"
                type = "font-awesome"
                size = {45}
                color = {"#fff"}
                style = {globalStyles.homeIcon}
            />
        </TouchableOpacity>
      </View>
      <View style = {globalStyles.allItemsContainer}>
        <View style = {globalStyles.firstItemContainer}>
            <View style = {globalStyles.firstItemText}>
                <Text style = {globalStyles.itemName}>
                    Hamburger
                </Text>
                <View style = {globalStyles.listIngredients}>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                            Crushed red pepper
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                            Barbecue sauces
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                            Soy sauce
                        </Text>
                    </View>
                </View>
            </View>
            <Image
                source={require("../assets/newHamburger.png")}
                style = {globalStyles.hamburgerImage}
            />
        </View>
        <View style = {globalStyles.firstItemContainer}>
            <Image
                source={require("../assets/newPizza.png")}
                style = {globalStyles.pizzaImage}
            />
            <View style = {globalStyles.secondItemText}>
                <View style = {{alignItems: "flex-end", marginRight: 4}}>
                    <Text style = {globalStyles.itemName}>
                        Chicken Pizza
                    </Text>
                </View>
                <View style = {[globalStyles.listIngredients, {paddingLeft: 19}]}>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Part-skim mozzarella cheese
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Parmesan cheese
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Tomato, chopped
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Skinless chicken breasts
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <View style = {globalStyles.firstItemContainer}>
            <View style = {{marginRight: 1}}>
                <Text style = {globalStyles.itemName}>
                Pita Bread Sandwiches
                </Text>
                <View style = {globalStyles.listIngredients}>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Shredded Mexican cheese
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Package taco seasoning
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Package pita bread
                        </Text>
                    </View>
                </View>
            </View>
            <Image
                source={require("../assets/newTacos.png")}
                style = {globalStyles.pitaImage}
            />
        </View>
        <View style = {globalStyles.firstItemContainer}>
            <Image
                source={require("../assets/newFriedChicken.png")}
                style = {globalStyles.friedChickenImage}
            />
            <View style = {globalStyles.secondItemText}>
                <View style = {{alignItems: "flex-end", marginRight: 4}}>
                    <Text style = {globalStyles.itemName}>
                    Fried Chicken wings
                    </Text>
                </View>
                <View style = {[globalStyles.listIngredients, {paddingLeft: 19}]}>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Freshly ground black pepper
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Mustard powder
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Cayenne pepper
                        </Text>
                    </View>
                    <View style = {globalStyles.oneIngredientView}>
                        <View style = {globalStyles.point}></View>
                        <Text style = {globalStyles.ingredientsText}>
                        Chicken wings
                        </Text>
                    </View>
                </View>
            </View>
        </View>
      </View>
        <KeyboardAvoidingView 
            style = {globalStyles.choiceView}
            behavior='height'
            >
            <TextInput
                style = {globalStyles.input}
                placeholder='Your Choice'
                placeholderTextColor={"#B2B2B2"}
            />
            <TouchableOpacity
                style = {globalStyles.proceedButton}
                onPress={() => {
                    console.log("Proceed")
                }}
            >
                <Text style = {globalStyles.proceedButtonText}>
                    Proceed to command
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}