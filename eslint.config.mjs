import nextVitals from "eslint-config-next"

const eslintConfig = [
  ...nextVitals,
  {
    ignores: ["tsconfig.tsbuildinfo"],
  },
]

export default eslintConfig
