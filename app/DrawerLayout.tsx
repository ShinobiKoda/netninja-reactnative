import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';
import MainStack from '@/routes/Mainstack';
import AboutStack from '@/routes/Aboutstack';

const Drawer = createDrawerNavigator();

function DrawerLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}

export default withLayoutContext(DrawerLayout);
