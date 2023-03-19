import { View, Text } from "react-native";
import { Slot, Stack, useRouter, useSearchParams } from "expo-router";

export default function _layout() {
  const router = useRouter();
  const { id } = useSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{ headerShown: true, headerTitle: `Details for id ${id}` }}
      />
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}
      >
        Details Screen
      </Text>
      <Text style={{ fontSize: 30 }}>{id}</Text>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <Slot />
      </View>
    </View>
  );
}
