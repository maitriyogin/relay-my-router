import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { useAuth } from "../context/auth";

import { Text } from "@components/Text";
export function SignOutButton() {
  const { signOut } = useAuth();

  return (
    <Link
      href="/sign-in"
      onPress={(ev) => {
        ev.preventDefault();
        signOut();
      }}
      asChild
    >
      <Pressable
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          paddingRight: 8,
        }}
      >
        <Text link>Sign Out</Text>
        <FontAwesome name="sign-out" size={24} color="black" />
      </Pressable>
    </Link>
  );
}
