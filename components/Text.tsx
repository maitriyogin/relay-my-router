import { Text as RNText } from "react-native";
export const Text = ({
  children,
  onPress = undefined,
  heading = false,
  big = false,
  link = false,
  style = {},
}) => (
  <RNText
    onPress={onPress}
    style={[
      style,
      {
        fontWeight: "normal",
        padding: 8,
        fontSize: big ? 30 : heading ? 20 : 16,
        color: link ? "blue" : "black",
      },
    ]}
  >
    {children}
  </RNText>
);
