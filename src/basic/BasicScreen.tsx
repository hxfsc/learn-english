import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default function ({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#330022"
    }
  })

  return (
    <View style={styles.container}>
      <Text>Basic Screen</Text>
      <Button title="Middle" onPress={() => navigation.navigate("MiddleScreen")} />
    </View>
  )
}
