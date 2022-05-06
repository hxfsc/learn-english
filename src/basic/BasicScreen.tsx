import React from "react"
import { View, Text, Button } from "react-native"

export default function ({ navigation }) {
  return (
    <View>
      <Text>Basic Screen</Text>
      <Button title="Middle" onPress={() => navigation.navigate("MiddleScreen")} />
    </View>
  )
}
