import BottomSheet, { useBottomSheet } from "@gorhom/bottom-sheet";
import { Link, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IndependentStack } from "./independent-stack";
import Ampere from "./independent-stack/ampere";
import List from "./independent-stack/list";
import Voltage from "./independent-stack/voltage";
const Stack = createStackNavigator();

export default function Index() {
  const navigation = useNavigation();
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = navigation.canGoBack();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const router = useRouter();

  const handleClose = useCallback(() => {
    console.log("handleClose");
    router.back();
  }, []);
  console.log("---- can go back", isPresented);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      onClose={handleClose}
      enablePanDownToClose
      detached={false}
    >
      <PreferencesView />
    </BottomSheet>
  );
}
const PreferencesView = () => {
  const { close } = useBottomSheet();
  // @ts-ignore
  return (
    <View style={styles.contentContainer}>
      <IndependentStack
        dismiss={close}
        LeftButton={() => (
          <TouchableOpacity onPress={() => close()}>
            <Text>Dismiss</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
  },
});
