import { useFocusEffect } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect } from "react"
import { View, Text, Button } from "react-native"

import { ThemeContext, themeContextProps } from "../../context/theme"

export default function ({ navigation }) {
  const { color, toggleColor } = useContext<themeContextProps>(ThemeContext)

  useFocusEffect(
    useCallback(() => {
      toggleColor("#9f5d1e")
    }, [navigation])
  )

  return (
    <View>
      <Text>Senior Screen</Text>
      <Text>{color}</Text>
      <Button title="Middle" onPress={() => navigation.navigate("MiddleScreen")} />
    </View>
  )
}
