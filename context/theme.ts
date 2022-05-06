import React from "react"

export interface themeContextProps {
  color: string
  toggleColor: (color: string) => void
}

const ThemeContext = React.createContext<themeContextProps>({
  color: "#ff00ff",
  toggleColor: () => {}
})

export { ThemeContext }
