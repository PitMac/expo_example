import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigators/StackNavigation";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    //primary: "yellow",
    //secondary: "yellow",
  },
};

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StackNavigation></StackNavigation>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
