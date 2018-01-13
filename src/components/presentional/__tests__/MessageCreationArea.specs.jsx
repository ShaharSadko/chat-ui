import React from 'react';
import MessageCreationArea from '../MessageCreationArea';
import {shallow, mount} from 'enzyme';
import {userNameKey} from "../../../constants/Constants";
import {Input, Button} from 'semantic-ui-react';

jest.mock('../../../utils/storage', () => ({
    getItem: (key) => 'shahar'
}));

const changeName = jest.fn();
const submitMessage = jest.fn();

let wrapper;
beforeEach(() => wrapper = shallow(<MessageCreationArea changeName={changeName} submitMessage={submitMessage}/>));

describe('src/components/presentional/MessageCreationArea', () => {
    it('should render correctly', () => {
        const wrapper = mount(<MessageCreationArea changeName={{}} submitMessage={{}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should have initialized state', () => {
        localStorage.setItem(userNameKey, 'shahar');
        expect(wrapper.state()).toEqual({message: '', userName: 'shahar'});
    });

    it('should call submitMessage', () => {
        localStorage.setItem(userNameKey, 'shahar');
        wrapper.find(Input).at(1).simulate('change', {target: {value: 'message'}});
        wrapper.find(Button).simulate('click');
        expect(submitMessage).toBeCalled();
    });

    it('should set user name and call name Change', () => {
        wrapper.find(Input).at(0).simulate('change', {target: {value: 'shahar'}});
        expect(wrapper.state().userName).toEqual('shahar');
        expect(changeName).toBeCalled();
    });
});