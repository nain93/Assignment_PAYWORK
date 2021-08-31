import React from 'react';
import { Provider } from 'react-redux';
import GlobalNav from './src/navigators/GlobalNav';
import store from "./src/store"

const App = () => {
  return (
    <Provider store={store}>
      <GlobalNav />
    </Provider>
  );
};

export default App;
