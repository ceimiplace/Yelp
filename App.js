import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import SingleResult from "./src/screens/SingleResult";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    SingleProduct: SingleResult,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);
