import sendMessageReducer from '../userNameReducer';
import {Reducer} from 'redux-testkit';
import {CHANGE_NAME} from '../../constants/Constants';


const changeUserNameAction = {type: CHANGE_NAME, payload: 'TesterName'};
const initialState = {};
const notExistingType = 'NONE';

describe('reducers/chatMessageReducer', () => {
    it('should have initial state ', () => {
        expect(sendMessageReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the same state after accepting a non existing action', () => {
        Reducer(sendMessageReducer).withState(initialState).expect({type: notExistingType}).toReturnState(initialState);
    });

    it('should set user name', () => {
        Reducer(sendMessageReducer).withState({message: ''}).expect(changeUserNameAction).toReturnState(changeUserNameAction.payload);
    });
});