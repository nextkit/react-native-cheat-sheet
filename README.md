# React Native cheat sheet (with TypeScript)
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

### Async Storage

For this we will be using [React Native Async Storage](https://github.com/react-native-community/async-storage/blob/%40react-native-community/async-storage-backend-legacy%402.0.0-rc.3/packages/storage-legacy/README.md).

```bash
yarn add @react-native-community/async-storage@next
yarn add @react-native-community/async-storage-backend-legacy@next
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
yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# (Optional)
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/stack
```

Add (or replace if the dependancie already exists) following dependencies to your android project in the file: `android/app/build.gradle`:

```gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

Add following code to `MainActivity.java`for the `react-native-gesture-handler`:
```java
package com.swmansion.gesturehandler.react.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

Now add this to `index.js` (Before registration):
```javascript
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();
```

## Adding custom fonts
1. Create an assets folder (and a fonts folder in it) at the root of your project directory:

```
├── src
│   └── ...
├── assets
│   ├── locales
│   └── fonts
│       └── font.ttf
├── index.js
├── package.json
└── ...
```
2. Create/Add to `react-native.config.js`:

```javascript
module.exports = {
  assets: ['./assets/fonts/'],
};
```

3. Next run the command 
```bash
npx react-native link
```

> If you are having problems with it (Font not being added/remove) [here](https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4) is a tutorial.



Don't forget to install the pods!
```bash
cd ios && pod install
```



