import {MESSAGE_RECEIVED} from '../constants/Constants'

const chatMessageReducer = (state = [], action) => {
    switch (action.type) {
        case MESSAGE_RECEIVED:
            return [...state, action.payload];
        default:
            return state;
    }
};
export default chatMessageReducer;