import { View } from "react-native";
import { Link, Slot, Stack, useRouter, useSearchParams } from "expo-router";
import { Text } from "../../../../components";
export default function _layout() {
  const { id } = useSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{ headerShown: true, headerTitle: `Details for id ${id}` }}
      />
      <Link href={"../"}>
        <Text>Details Screen</Text>
      </Link>
      <Text big>{id}</Text>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <Slot />
      </View>
    </View>
  );
}
