import { useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/core";

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(user) {
  const rootSegment = useSegments()[0];
  const router = useRouter();
  const nav = useNavigation();

  console.log("---- rootSegment", user, rootSegment);
  useEffect(() => {
    if (user === undefined) {
      return;
    }

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      rootSegment !== "(auth)"
    ) {
      // nav.dispatch(
      //   StackActions.replace("(auth)/sign-in", {
      //     // user: 'jane',
      //   })
      // );
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user) {
      // Redirect away from the sign-in page.
      console.log("---- Signed in going to /home");
      router.replace("/home");
    }
  }, [user, rootSegment]);
}

export function Provider(props) {
  const { getItem, setItem, removeItem } = useAsyncStorage("USER");
  const [user, setAuth] = React.useState(undefined);

  useEffect(() => {
    getItem().then((json) => {
      console.log("json", json);
      if (json != null) {
        setAuth(JSON.parse(json));
      } else {
        setAuth(null);
      }
    });
  }, []);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setAuth({});
          setItem(JSON.stringify({}));
        },
        signOut: () => {
          setAuth(null);
          removeItem();
        },
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
