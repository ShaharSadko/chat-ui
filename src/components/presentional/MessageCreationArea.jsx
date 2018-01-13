import React from 'react';
import {Input, Button, Image} from 'semantic-ui-react';
import {getItem} from '../../utils/storage';
import {userNameKey,avatarKey} from '../../constants/Constants'

export default class MessageCreationArea extends React.Component {
    componentWillMount = () => {
        this.setState({message: ''});
        let userName = getItem(userNameKey) ?getItem(userNameKey):'';
        this.setState({userName})
    };
    handleSubmitChange = (e) => this.setState({message: e.target.value});
    handleUserNameChange = (e) => {
        this.setState({userName: e.target.value});
        this.props.changeName(e.target.value)
    };

    render() {
        let {submitMessage} = this.props;
        const avatarUrl = getItem(avatarKey);

        return <div>
            <div className={'userNameArea'}>
                <Image id='avatar' src={avatarUrl} avatar/>
                <Input id='userName' size='mini' value={this.state.userName} onChange={this.handleUserNameChange}/>
            </div>
            <br/>
            <div className={'messageArea'}>
                <Button content='Send' id='submitMessage' disabled={!this.state.message || !this.state.userName} primary
                        onClick={() => submitMessage(this.state.message)}/>
                <Input id='userMessage' value={this.state.message} onChange={this.handleSubmitChange}/>

            </div>
        </div>
    }
}
