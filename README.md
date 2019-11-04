# React Native starter
💡 Scripts and How To's on how to create your fully functional React Native app with TypeScript!

## Getting Started

### Creating React Native app
react-native guide [here](https://facebook.github.io/react-native/docs/getting-started)

```bash
npx react-native init MyApp --template react-native-template-typescript
```

> If you previously installed a global `react-native-cli` package, please remove it as it may cause unexpected issues. Remove Commands:
> `npm uninstall -g react-native-cli`
> `yarn global remove react-native-cli`

Create directory for `src` files and move `App.tsx` to it:

```
├── src
│   └── App.tsx
├── index.js
├── package.json
└── ...
```

### i18n support

```bash
yarn add i18n-js
yarn add --dev @types/i18n-js
```

Edit `tsconfig.json` to allow reading json files:
```javascript
{
  // Other settings ...
  "resolveJsonModule": true,
  // Other settings ...
}
```

Make directory for assets and locale translations:

```
├── src
│   ├── assets
│   │   ├── locales
│   │   │   ├── en.json
│   │   │   ├── de.json
│   │   │   └── ...
│   └── App.tsx
├── index.js
├── package.json
└── ...
```

The locale folder will contain the translations files.

Install [React Native Localize](https://github.com/react-native-community/react-native-localize):
```bash
yarn add react-native-localize
```

### Local Database

For this we will be using [React Native SQLite](https://github.com/andpor/react-native-sqlite-storage).

```bash
yarn add react-native-sqlite-storage
yarn add --dev @types/react-native-sqlite-storage
```





Don't forget to install the pods!
```bash
cd ios && pod install
```


