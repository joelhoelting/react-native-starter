import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { pages } from "./src/screens/HomeScreen";

const navigator = createStackNavigator(pages, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "App",
  },
});

export default createAppContainer(navigator);
