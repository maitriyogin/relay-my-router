import { Stack } from "expo-router";

export default function Layout() {
  return <Stack>
    <Stack.Screen name='index' options={{headerShown: true, headerTitle: 'User Settings'}}/>
    <Stack.Screen name='details' options={{headerShown: true, headerTitle: 'User Details'}}/>
    <Stack.Screen name='modal' options={{
      presentation: "transparentModal",
      animation:'none'
    }}/>
  </Stack>
}