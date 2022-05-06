import React from "react"

import { SafeAreaView, Text, View, Button, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import BasicScreen from "./src/basic/BasicScreen"
import MiddleScreen from "./src/basic/MiddleScreen"
import SeniorScreen from "./src/basic/SeniorScreen"

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
          <Stack.Screen name="BasicScreen" component={BasicScreen} />
          <Stack.Screen name="MiddleScreen" component={MiddleScreen} />
          <Stack.Screen name="SeniorScreen" component={SeniorScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("BasicScreen")}>
          <View>
            <Text>Basic</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MiddleScreen")}>
          <View>
            <Text>Middle</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SeniorScreen")}>
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
    <View>
      <Text>User Screen</Text>
    </View>
  )
}

const tabbar = {
  HomeScreen: "主页",
  UserScreen: "个人"
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: () => null,
          tabBarLabel: tabbar[route.name]
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="UserScreen" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
