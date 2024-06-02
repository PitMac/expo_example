import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Button, Text, useTheme } from "react-native-paper";

export default function HelloScreen() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
      </Appbar.Header>
      <Text>HelloScreen</Text>
      <Button onPress={() => navigation.navigate("drawer")}>Navigate</Button>
    </View>
  );
}
