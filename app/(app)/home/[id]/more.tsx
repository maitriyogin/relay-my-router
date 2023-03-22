import { useSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Text } from "../../../../components";
export default () => {
  const { id } = useSearchParams();
  return (
    <View
      style={{
        borderRadius: 5,
        borderWidth: 2,
        padding: 8,
        backgroundColor: "orange",
      }}
    >
      <Text>More Info for id :{id}</Text>
    </View>
  );
};
