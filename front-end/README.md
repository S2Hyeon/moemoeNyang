### Prettier

VS Code Extenstion에서 Prettier 설치 후,
루트 폴더에 `.prettierrc'를 만든 후 아래 문구 추가

```
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

### Tailwind

`yarn add -D tailwindcss`
`npx tailwindcss init`

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
