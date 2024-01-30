import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./Login";

const Drawer = createDrawerNavigator();

function DrawerApp() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

export default DrawerApp;
