import chatMessageReducer from '../chatMessageReducer';
import {Reducer} from 'redux-testkit';
import {MESSAGE_RECEIVED} from '../../constants/Constants';

const initialState = [];
const notExistingType = 'NONE';
const messagePayload = {text: 'test text', avatar: 'http://testUrl', username: 'Tester', isOwner: false};
const messageReceivedAction = {type: MESSAGE_RECEIVED, payload: messagePayload};

describe('reducers/chatMessageReducer', () => {
    it('should have initial state ', () => {
        expect(chatMessageReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the same state after accepting a non existing action', () => {
        Reducer(chatMessageReducer).withState(initialState).expect({type: notExistingType}).toReturnState(initialState);
    });

    it('should receive message', () => {
        Reducer(chatMessageReducer).expect(messageReceivedAction).toReturnState([...initialState, messagePayload]);
    });

});