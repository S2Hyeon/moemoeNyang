### Prettier

VS Code Extenstion에서 Prettier 설치 후,
루트 폴더에 `.prettierrc'를 만든 후 아래 문구 추가!

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

### Storybook

`yarn storybook`으로 스토리북 페이지를 실행할 수 있다.

stories에 있는 Button.stories.tsx 예시 설명

1. 버튼 컴포넌트를 `front-end\src\components\Button\Button.jsx`에 만듭니다.
2. 버튼 컴포넌트에 styled-component로 styled을 씌웁니다.

```jsx
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor = { control: "color" },
  label,
  ...props
}) => {
  return (
    <StyledContainer>
      <button...>
      </button>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
...
`
```

3. 버튼 컴포넌트는 props에 따라 클래스명과 스타일이 바뀝니다.

```jsx
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor = { control: "color" },
  label,
  ...props
}) => {
  // mode가 primary이면, 클래스명이 storybook-button--primary가 되어 파란색이 됨
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <StyledContainer>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " ",
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </StyledContainer>
  );
};
```

4. `front-end\src\stories\Button.stories.tsx`에 아래와 같이 스토리북에 넣고 싶은 props를 설정하여 스토리를 작성합니다. (primary가 true인 경우에 대한 스토리)

```tsx
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
```

5. `yarn storybook`으로 실행하면 작성한 스토리가 추가되어있습니당.

### 폰트

폰트는 subset폰트를 만들어 src/assets/fonts에 저장하였습니다.
(subset폰트는 사용하는 글자만 저장하여 용량이 적은 폰트입니다.)

src/index.css에 아래와 같이 불러옵니다.

```css
@font-face {
  font-family: "Tmoney RoundWind";
  src: url("./assets/fonts/subset-TmoneyRoundWind-Regular.woff2") format("woff2"),
    url("./assets/fonts/subset-TmoneyRoundWind-Regular.woff") format("woff"),
    url("./assets/fonts/subset-TmoneyRoundWind-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Tmoney RoundWind";
  src: url("./assets/fonts/subset-TmoneyRoundWind-ExtraBold.woff2") format("woff2"),
    url("./assets/fonts/subset-TmoneyRoundWind-ExtraBold.woff") format("woff"),
    url("./assets/fonts/subset-TmoneyRoundWind-ExtraBold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

src/index.css에 아래와 같이 폰트를 적용하였으니 추후 수정시 참고 바랍니다.

```css
body {
  line-height: 1;
  /* 폰트 패밀리를 지정합니다. */
  font-family: "Tmoney RoundWind", system-ui, -apple-system, /* Firefox supports this but not yet `system-ui` */
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji";
}
```
