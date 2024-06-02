import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DrawerComponent from "../components/DrawerComponent";
import OtherScreen from "../screens/OtherScreen";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="other"
        component={OtherScreen}
      />
    </Drawer.Navigator>
  );
}
