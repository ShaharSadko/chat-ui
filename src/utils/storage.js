import {AvatarsUrls, avatarKey, userNameKey} from '../constants/Constants.js';
import {setUserName} from '../actions/actions';

export let initStorage = (dispatch) => {
    if (getItem(avatarKey) === null || getItem(avatarKey) === undefined)
        setItem(avatarKey, AvatarsUrls[Math.floor(Math.random() * AvatarsUrls.length)]);
    if (getItem(userNameKey) !== null)
        dispatch(setUserName(getItem(userNameKey)));
};

export let getItem = (key) => {
    try {
        return localStorage.getItem(key)
    }
    catch (err) {
        console.error(err)
    }
};

export let setItem = (key, item) => {
    try {
        localStorage.setItem(key, item);
    }
    catch (err) {
        console.error(err);
    }
};