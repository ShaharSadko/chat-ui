import React from 'react';
import Message from '../Message';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';

const message = {avatar: 'avatar', isOwner: true, text: 'text', username: 'shahar'};
const ownerClassName = 'ownerMessage';
let wrapper;
beforeEach(() => {
    wrapper = mount(<Message message={message}/>);
});

describe('src/components/presentional/Message', () => {
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should contain the passed down properties', () => {
        expect(wrapper.prop('message')).toEqual(message);
    });

    it('should contain image with passed avatar', () => {
        expect(wrapper.find('img')).toHaveProperty('length', 1);
        expect(wrapper.find('span')).toHaveProperty('length', 1);
        expect(wrapper.find('li')).toHaveProperty('length', 1);
    });
});