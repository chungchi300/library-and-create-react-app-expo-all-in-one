import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { plainEs } from "@walnut/common/plainEs";
import { testEs6, testSpreadOperator } from "@walnut/common/es6Export";
import JSONTree from "react-native-json-tree";

export default function App() {
  return (
    <View style={styles.container}>
      <JSONTree data={testSpreadOperator()} />
      <Text>
        Open up App.js to stadddrt {plainEs()} {testEs6()}
        working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
