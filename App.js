import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  ListScreen,
  HomeScreen,
  CustomComponent,
  ImageScreen,
  CounterScreen,
  ColorScreen,
  SquareScreen,
  SquareScreenReducer,
  TextScreen,
  BoxSreen
} from "./src/screens";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    CustomComponent: CustomComponent,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    SquareReducer: SquareScreenReducer,
    TextInput: TextScreen,
    Box: BoxSreen 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
