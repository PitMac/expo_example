import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useState } from "react";
import { Drawer, useTheme } from "react-native-paper";

const DrawerComponent = (props) => {
  const theme = useTheme();
  console.log(props.state.routes);
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: theme.colors.background,
      }}
      {...props}
    >
      <Drawer.Section title="TITULO">
        <Drawer.Item
          label="Home"
          active={props.state.index === 0}
          onPress={() => props.navigation.navigate("home")}
        />
        <Drawer.Item
          label="Second Item"
          active={props.state.index === 1}
          onPress={() => props.navigation.navigate("other")}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerComponent;
