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
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);