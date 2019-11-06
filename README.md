# React Native starter
💡 Scripts and How To's on how to create your fully functional React Native app with TypeScript!

## Getting Started

### Creating React Native app
react-native guide [here](https://facebook.github.io/react-native/docs/getting-started).

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

Edit `tsconfig.json` to include the following options:
```javascript
{
  // Other settings ...
  "resolveJsonModule": true,
  "experimentalDecorators": true,
  // Other settings ...
}
```

### i18n support

```bash
yarn add i18n-js
yarn add --dev @types/i18n-js
```

Make directory for assets and locale translations:

```
├── src
│   └── App.tsx
├── assets
│   └── locales
│       ├── en.json
│       ├── de.json
│       └── ...
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


### Mobx

```bash
yarn add mobx mobx-react-lite
yarn add --dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

Create the file `.babelrc` and add the following:
```json
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    ["@babel/plugin-transform-flow-strip-types"],
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-class-properties", {"loose": true}]
  ]
}
```

To your `index.js` add the following before mounting your app:
```javascript
import 'mobx-react-lite/optimizeForReactNative';
```

### SVG
```bash
yarn add react-native-svg
```

### React Navigation

Gettings Started with [React Navigation](https://reactnavigation.org/docs/en/getting-started.html).

```bash
yarn add react-navigation react-native-reanimated react-native-gesture-handler react-native-screens
# (Optional)
yarn add react-navigation-tabs # Adds tab support
```

Add (or replace if the dependancie already exists) following dependencies to your android project in the file: `android/app/build.gradle`:

```gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

Now add this to the top of your `App.tsx` (Your first rendered component):
```javascript
import {enableScreens} from 'react-native-screens';
enableScreens();
```

## Adding custom fonts
1. Create an assets folder (and a fonts folder in it) at the root of your project directory:

```
├── src
│   └── ...
├── assets
│   ├── locale
│   └── fonts
│       └── font.ttf
├── index.js
├── package.json
└── ...
```
2. In your package.json specify where the custom fonts are located

```json
  "rnpm": {
    "assets": [
   "./assets/fonts/"
    ]
  }
```

3. Next run the command 
```bash
react-native link
```




Don't forget to install the pods!
```bash
cd ios && pod install
```



