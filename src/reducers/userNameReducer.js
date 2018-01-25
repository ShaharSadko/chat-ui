import {CHANGE_NAME} from '../constants/Constants';

const userNameReducer = (state={}, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return action.payload;
        }
        default:
            return state;
    }
};
export default userNameReducer;