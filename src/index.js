import configureStore from "./store";
import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import DataHandler from "./utils/DataHandler";
import NetworkInfo from "./utils/NetworkInfo";
import AppNavigator from "./navigator";
import { Provider } from "react-redux";
import {
  AlertModal,
} from "./modal";
import { ConfigureApp, Util } from "./utils";

ConfigureApp();
const App = () => {
  // set store state
  const [storeState, setStore] = useState(null);

  // when store is configured
  const onStoreConfigure = (store) => {
    //init things

    DataHandler.setStore(store);
    NetworkInfo.addNetInfoListener();
    // set store state

    setTimeout(() => {
      // hide splash
      setStore(store);
    }, 1500);
  };

  useEffect(() => {
    // configure store
    configureStore(onStoreConfigure);

    // unscribe to all things on unmount
    return () => {
      NetworkInfo.removeNetInfoListener();
    };
  }, []);

  if (storeState === null) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Provider store={storeState}>
        <StatusBar
          barStyle={Util.isPlatformAndroid() ? "light-content" : "dark-content"}
        />
        <AlertModal ref={(ref) => DataHandler.setAlertModalRef(ref)} />
        <AppNavigator />
      </Provider>
    </View>
  );
};

export default App;
