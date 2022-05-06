module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "quotes": 0,
        "semi":0,
        "no-unused-vars": 0,
        "comma-dangle":0
      }
    }
  ]
}
