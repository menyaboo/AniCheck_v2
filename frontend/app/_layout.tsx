import {AppProvider} from "../src/providers/AppProvider";
import {StatusBar} from "expo-status-bar";

const Layout = () => (
  <AppProvider>
    <StatusBar style="auto"/>
  </AppProvider>
);

export default Layout;
