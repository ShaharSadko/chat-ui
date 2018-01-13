//This is then entry point for your app. Do as you wish.

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from "./components/index.js";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {initStorage} from './utils/storage';
import socketOperations from './sockets/socketOperations';
import {socketServerUrl, userNameKey,spotImChannel} from './constants/Constants';
import {getItem} from "./utils/storage";
import {setNewMessage} from "./actions/actions";
import io from 'socket.io-client';

let store = createStore(reducer);
let socket = new socketOperations(io(socketServerUrl), store.dispatch);

socket.addChannelListener(spotImChannel,(message) => {
    if (getItem(userNameKey) !== message.username)
        return setNewMessage(message);

});

initStorage(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App socket={socket}/>
    </Provider>, document.getElementById("root"));



