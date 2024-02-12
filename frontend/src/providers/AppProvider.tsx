import {FC, PropsWithChildren} from "react";
import {Provider} from "react-redux";
import {Slot} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

import {store} from "../store";
import {ScreenView} from "../styles/global";
import {Navigation} from "../components/navigation";

export const AppProvider: FC<PropsWithChildren> = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <ScreenView>
        <Slot/>
      </ScreenView>
      <Navigation/>
    </SafeAreaView>
  </Provider>
)