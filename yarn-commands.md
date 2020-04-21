Create RN App:

```bash
npx react-native init MyApp --template react-native-template-typescript
```

Install dependencies:

```bash
yarn add i18n-js react-native-localize @react-native-community/async-storage@next react-native-community/async-storage-backend-legacy@next mobx mobx-react-lite react-native-svg @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
Optional Navigation components:
```
yarn add @react-navigation/bottom-tabs @react-navigation/stack
```

Install dev dependencies:
```bash
yarn add --dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @types/i18n-js
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

Add to `index.js` (Before `AppRegistry.registerComponent(...)`):
```javascript
// Optimize MobX
import 'mobx-react-lite/optimizeForReactNative';
// Gesture handler
import 'react-native-gesture-handler';

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
