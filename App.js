// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import RootNavigator from './src/RootNavigator';
// const App = () => {
//   return (
//     <Provider store={store}>
//       <RootNavigator />
//     </Provider>
//   );
// };
// export default App;


import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Notifications from './src/Notifications';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const Drawer = createDrawerNavigator();

import { useSelector } from 'react-redux';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  const { language } = useSelector(state => state.moviesReducer);
  
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={language ==="SI" ? "නිවස" : "Home"} component={Home} />
      <Drawer.Screen name={language ==="SI" ? "පිළිබඳ" : "About"} component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}