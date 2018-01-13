import * as actions from '../actions';
import {MESSAGE_RECEIVED, CHANGE_NAME} from '../../constants/Constants';
import {setLocalStorage} from '../../utils/test-utils/storage';
import * as utils from "../../utils/storage";
import {userNameKey, avatarKey} from "../../constants/Constants";

beforeAll(() => {
    setLocalStorage();
});

const text = 'message';
const username = 'shahar';
const avatar = 'url';
const messageReceivedActions= {
    type: MESSAGE_RECEIVED,
    payload: {text, avatar, username, isOwner: true}
};


describe('src/actions/actions', () => {
    it('should create action to set user name', () => {
        const expectedAction = {type: CHANGE_NAME, payload: username};
        expect(actions.setUserName(username)).toEqual(expectedAction);
    });

    it('should create action to set new message', () => {
        const expectedMessage = messageReceivedActions.payload;
        expect(actions.setNewMessage(expectedMessage, true)).toEqual(messageReceivedActions);
    });

    it('should submit message and create action to set new message', () => {
        const socketMock = {
            emitEvent(test, message) {
            }
        };
        const socketSpy = jest.spyOn(socketMock, 'emitEvent');

        utils.getItem = jest.fn((key) => {
            if (key === userNameKey) return username;
            if (key === avatarKey) return avatar;
        });

        expect(actions.submitMessage(text, socketMock)).toEqual(messageReceivedActions);
        expect(socketSpy).toHaveBeenCalledWith(expect.anything(), {avatar, text, username});
    });
});