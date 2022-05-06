import { useFocusEffect } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect } from "react"
import { View, Text, Button } from "react-native"

import { ThemeContext, themeContextProps } from "../../context/theme"

export default function (props: any) {
  const { navigation } = props
  const { color, toggleColor } = useContext<themeContextProps>(ThemeContext)

  useFocusEffect(
    useCallback(() => {
      toggleColor("#23527c")
    }, [navigation])
  )

  return (
    <View>
      <Text>Basic Screen</Text>
      <View>
        <Text>{color}</Text>
      </View>
      <Button title="Middle" onPress={() => navigation.navigate("MiddleScreen")} />
    </View>
  )
}
