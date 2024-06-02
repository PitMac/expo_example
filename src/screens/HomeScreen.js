import { View, SafeAreaView } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { useCounterStore } from "../stores/counter";
import { Appbar, Button, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const counter = useCounterStore((state) => state.counter);
  const increasePopulation = useCounterStore(
    (state) => state.increasePopulation
  );

  const generateData = (numItems) => {
    const data = [];
    for (let i = 1; i <= numItems; i++) {
      data.push({ id: i, number: i });
    }
    return data;
  };

  const dataList = generateData(100);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title="Title" />
      </Appbar.Header>
      <View style={{}}>
        <Text>{counter} Here</Text>
        <Button onPress={increasePopulation}>Increment</Button>
        <View
          style={{
            height: 200,
          }}
        >
          <FlashList
            data={dataList}
            renderItem={({ item }) => <Text>{item.number}</Text>}
            estimatedItemSize={200}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
