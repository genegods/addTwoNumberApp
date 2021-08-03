import React from "react";
import "./App.css";
import Add from './components/add/Add'
import {store} from './redux/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
      <Provider store={store}>
      <React.Fragment>
         <Add/>
      </React.Fragment>
      </Provider>
   
  );
};

export default App;
