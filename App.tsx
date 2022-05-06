import React, { useState } from "react"

import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, StatusBar } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icons from "react-native-vector-icons/MaterialIcons"

import BasicScreen from "./src/basic/BasicScreen"
import MiddleScreen from "./src/basic/MiddleScreen"
import SeniorScreen from "./src/basic/SeniorScreen"

import { ThemeContext } from "./context/theme"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1
    },

    container: {
      flex: 1
    },
    footer: {
      paddingTop: 12,
      paddingBottom: 12,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#FFF"
    }
  })

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="BasicScreen">
          <Stack.Screen name="BasicScreen" component={BasicScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MiddleScreen" component={MiddleScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SeniorScreen" component={SeniorScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("BasicScreen")}>
          <View>
            <Text>Basic</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MiddleScreen")
          }}
        >
          <View>
            <Text>Middle</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SeniorScreen")
          }}
        >
          <View>
            <Text>Senior</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function UserScreen() {
  return (
    <View style={{ flex: 1, display: "flex", justifyContent: "center", alignContent: "center" }}>
      <Text>User Screen</Text>
    </View>
  )
}

function FavScreen() {
  return (
    <View style={{ flex: 1, display: "flex", justifyContent: "center", alignContent: "center" }}>
      <Text>Fav Screen</Text>
    </View>
  )
}

const tabbar = {
  HomeScreen: "主页",
  FavScreen: "收藏",
  UserScreen: "个人"
}

const tabbarIcon = {
  HomeScreen: ({ color }) => <Icons name="menu-book" size={30} color={color} />,
  FavScreen: ({ color }) => <Icons name="favorite" size={30} color={color} />,
  UserScreen: ({ color }) => <Icons name="person" size={30} color={color} />
}

const App = () => {
  const [bgColor, toggleThemeColor] = useState<string>("#23527c")

  const toggleColor = (color: string) => {
    toggleThemeColor(color)
  }

  return (
    <ThemeContext.Provider value={{ color: bgColor, toggleColor }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        <StatusBar barStyle={"light-content"} />

        <NavigationContainer>
          <Text>{bgColor}</Text>
          <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
              headerShown: false,
              title: tabbar[route.name],
              tabBarShowLabel: true,
              tabBarIcon: ({ color }) => {
                return tabbarIcon[route.name]({ color })
              },
              tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor: bgColor
              }
            })}
          >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="FavScreen" component={FavScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeContext.Provider>
  )
}

export default App
