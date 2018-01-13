import React from 'react';
import MessageListArea from '../MessageListArea';
import {shallow, mount} from 'enzyme';

const messages = [{avatar: 'avatar', isOwner: true, text: 'text', username: 'shahar'}, {
    avatar: 'avatar',
    isOwner: true,
    text: 'text',
    username: 'shahar'
}];

describe('src/components/presentional/MessageListArea', () => {
    it('should render correctly', () => {
        let wrapper = mount(<MessageListArea messages={messages}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should pass props', () => {
        let wrapper = mount(<MessageListArea messages={messages}/>);
        expect(wrapper.prop('messages')).toEqual(messages);
    });
});