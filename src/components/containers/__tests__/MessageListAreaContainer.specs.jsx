import MessageListAreaContainer from '../MessageListAreaContainer';
import {MESSAGE_RECEIVED, CHANGE_NAME} from '../../../constants/Constants';
import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import MessageListArea from '../../presentional/MessageListArea';
import configureStore from 'redux-mock-store';
import * as actions from '../../../actions/actions';

const messages = [{text: 'text', avatar: 'avatar', isOwner: true, username: 'shahar'}];
const initialState = {chatMessageReducer: messages};
const mockStore = configureStore();
let store, wrapper;

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}>
        <MessageListAreaContainer store={store}/>
    </Provider>);
});

describe('src/components/containers/MessageCreationAreaContainer', () => {
    it('should render the presentional component', () => {
        expect(wrapper.find(MessageListAreaContainer).length).toEqual(1);
    });

    it('should match the initialState',  ()=> {
        expect(wrapper.find(MessageListArea).prop('messages')).toEqual(messages);
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