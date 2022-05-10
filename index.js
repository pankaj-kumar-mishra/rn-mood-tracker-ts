import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

// NOTE Mood Tracker Application
// import App from './src/App';

// NOTE React Nested Navigation
import App from './src-nav/App';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
