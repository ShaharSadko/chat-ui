import * as storage from '../storage';
import {userNameKey} from "../../constants/Constants";

jest.mock('../../actions/actions', () => ({
    setUserName: (userName) => userName
}));

beforeEach(() => {
        global.localStorage.removeItem(key);
        storage.setItem(key, expectedItem)
    }
);
const key = 'key';
const expectedItem = 1;

describe('src/utils/localStorage', () => {
    it('should get item by key', () => {
        const actualItem = storage.getItem(key);
        expect(expectedItem).toEqual(actualItem);
    });
    it('should set item by key',  ()=> {
        storage.setItem(key, expectedItem);
        const actualItem = storage.getItem(key);
        expect(expectedItem).toEqual(actualItem);
    });
    it('should call setItem and dispatch setUserName',  () =>{
        let dispatch = jest.fn((action) => {});
        const userName = 'shahar';
        const setItemMock = jest.fn();
        localStorage.setItem(userNameKey, userName);
        storage.initStorage(dispatch);

        expect(dispatch).toBeCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(userName);
    });
});