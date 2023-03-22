import { View } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "../../../../components";
export default function Details() {
  const router = useRouter();
  return (
    <View>
      <Text
        big
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}
      >
        Details Screen
      </Text>
    </View>
  );
}
