import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";
import { usePathname, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useColorScheme } from "@/hooks/useColorScheme"; // Adjust this import path as necessary
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {/* User Info Section */}
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View>

      {/* Navigation Items */}
      <TouchableOpacity
        style={[
          styles.navItem,
          { backgroundColor: pathname === "/(tabs)/index" ? "#333" : "#fff" },
        ]}
        onPress={() => router.push("/")}
      >
        <Feather
          name="home"
          size={24}
          color={pathname === "/(tabs)/index" ? "#fff" : "#000"}
        />
        <Text
          style={[
            styles.navItemLabel,
            { color: pathname === "/(tabs)/index" ? "#fff" : "#000" },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navItem,
          { backgroundColor: pathname === "/(tabs)/about" ? "#333" : "#fff" },
        ]}
        onPress={() => router.push("/(tabs)/about")}
      >
        <Feather
          name="info"
          size={24}
          color={pathname === "/(tabs)/about" ? "#fff" : "#000"}
        />
        <Text
          style={[
            styles.navItemLabel,
            { color: pathname === "/(tabs)/about" ? "#fff" : "#000" },
          ]}
        >
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          { backgroundColor: pathname === "/(tabs)/explore" ? "#333" : "#fff" },
        ]}
        onPress={() => router.push("/(tabs)/explore")}
      >
        <Feather
          name="info"
          size={24}
          color={pathname === "/(tabs)/explore" ? "#fff" : "#000"}
        />
        <Text
          style={[
            styles.navItemLabel,
            { color: pathname === "/(tabs)/explore" ? "#fff" : "#000" },
          ]}
        >
          Explore
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"), // Ensure this path is correct for your project structure
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Show the splash screen until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        {/* <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="about" options={{ title: "About" }} /> */}
      </Drawer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userDetailsWrapper: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#555",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  navItemLabel: {
    marginLeft: 15,
    fontSize: 16,
  },
});
