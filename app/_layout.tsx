import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";

import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
// import { SplashScreen } from "expo-router";
// import { useFonts } from "expo-font";
// import { useCallback, useEffect } from "react";
// import * as NavigationBar from "expo-navigation-bar";
// import { Platform } from "react-native";

// import { StatusBar } from "expo-status-bar";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Clerk publishable key is not defined set in .env");
}

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
