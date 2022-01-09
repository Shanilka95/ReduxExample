/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RootNavigator from './src/RootNavigator';
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;
