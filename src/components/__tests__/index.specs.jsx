import App from '../index'
import React from 'react';
import {shallow} from 'enzyme';
const socket = {};

describe('src/components/index', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App socket={socket}/>);
        expect(wrapper).toMatchSnapshot();
    });

});