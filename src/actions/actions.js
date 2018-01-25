import {MESSAGE_RECEIVED, CHANGE_NAME,userNameKey} from '../constants/Constants';
import {getItem, setItem} from "../utils/storage";
import {avatarKey,userNameKey} from "../constants/Constants";
import {setItem} from '../utils/storage';

export const setNewMessage = (message, isOwner = false) => {
    return {
        type: MESSAGE_RECEIVED,
        payload: {text: message.text, avatar: message.avatar, username: message.username, isOwner}
    }
};

export const setUserName = name => {
    setItem(userNameKey,name);
    return {type: CHANGE_NAME, payload: name}
};

export const submitMessage = (text,socket) => {
    const username = getItem(userNameKey);
    const avatar = getItem(avatarKey);
    const message = {avatar, username, text};

    socket.emitEvent('spotim/chat',message);
    return setNewMessage(message, true);

};
