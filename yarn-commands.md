Create RN App:

```bash
npx react-native init MyApp --template react-native-template-typescript
```

Install dependencies:

```bash
yarn add i18n-js react-native-localize react-native-sqlite-storage mobx mobx-react-lite react-native-svg react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-navigation-tabs
```

Install dev dependencies:
```bash
yarn add --dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @types/react-native-sqlite-storage @types/i18n-js
```

Install pods:
```bash
cd ios && pod install
```

Add to `android/app/build.gradle` dependencies:
```gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

Add to `index.js` (Before `AppRegistry.registerComponent(...)`):
```javascript
// Optimize MobX
import 'mobx-react-lite/optimizeForReactNative';

// Use react-native-screens
import {enableScreens} from 'react-native-screens';
enableScreens();
```

Add to `.babelrc`:
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

Add options in `tsconfig.json`:
```javascript
{
  // Other settings ...
  "resolveJsonModule": true,
  "experimentalDecorators": true,
  // Other settings ...
}
```

You are all set. Happy coding!
