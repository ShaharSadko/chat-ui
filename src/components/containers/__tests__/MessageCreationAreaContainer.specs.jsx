import MessageCreationAreaContainer from '../MessageCreationAreaContainer';
import {MESSAGE_RECEIVED, CHANGE_NAME} from '../../../constants/Constants';
import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import MessageCreationArea from '../../presentional/MessageCreationArea';
import configureStore from 'redux-mock-store';
import * as actions from '../../../actions/actions';

const message = {text: 'text', avatar: 'avatar', isOwner: true, username: 'shahar'};
const initialState = {sendMessageReducer: message};
const mockStore = configureStore();
let store, wrapper;

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}>
        <MessageCreationAreaContainer store={store}/>
    </Provider>);
});

describe('src/components/containers/MessageCreationAreaContainer', () => {
    it('should render the presentional component', () => {
        expect(wrapper.find(MessageCreationAreaContainer).length).toEqual(1);
    });

    it('should match the initialState',  ()=> {
        expect(wrapper.find(MessageCreationArea).prop('message')).toEqual(message);
    });

    it('should dispatch the correct actions',  ()=> {
        let action;
        store.dispatch(actions.setNewMessage('hey', true));
        store.dispatch(actions.setUserName('shahar'));
        action = store.getActions();
        expect(action[0].type).toBe(MESSAGE_RECEIVED);
        expect(action[1].type).toBe(CHANGE_NAME);
    });

});