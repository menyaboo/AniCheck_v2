import {StatusBar} from "expo-status-bar";
import {TitleList} from "../src/components/home-screen/title-list";
import {Search} from "../src/components/search";

const App = () => (
  <>
    <Search/>
    <TitleList />
    <StatusBar style="auto"/>
  </>

);

export default App;
