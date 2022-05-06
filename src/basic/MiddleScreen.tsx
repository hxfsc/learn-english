import { useFocusEffect } from "@react-navigation/native"
import React, { useEffect, useContext, useCallback } from "react"
import { View, Text, Button } from "react-native"

import { ThemeContext, themeContextProps } from "../../context/theme"

export default function ({ navigation }) {
  const { color, toggleColor } = useContext<themeContextProps>(ThemeContext)

  useFocusEffect(
    useCallback(() => {
      toggleColor("#f66")
    }, [navigation])
  )

  return (
    <View>
      <Text>Middle Screen {color}</Text>
      <Button title="Middle" onPress={() => navigation.navigate("MiddleScreen")} />
    </View>
  )
}
