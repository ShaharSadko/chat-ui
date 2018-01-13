import {CHANGE_NAME,userNameKey} from '../constants/Constants';
import {setItem} from '../utils/storage';

const userNameReducer = (state={}, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            setItem(userNameKey,action.payload);
            return action.payload;
        }
        default:
            return state;
    }
};
export default userNameReducer;