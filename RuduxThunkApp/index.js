/** @format */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers/index';
import UsersScreen from './src/scenes/user/UsersScreen';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleWare (reducers);

const App =()=>{
    return (
        <Provider store ={store}>

            <UsersScreen />

        </Provider>
    );
}
AppRegistry.registerComponent(appName, () => App);
