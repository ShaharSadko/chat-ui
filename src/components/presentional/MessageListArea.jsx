import React from 'react';
import Message from './Message';
import {Container} from 'semantic-ui-react';
const MessageListArea = ({messages}) => {
    let chatMessages = messages.map((message,i) => <Message key={i} {...message}/>)
    return <Container className={'chatWindow'}>
        <ul className={'chatMessageList'}>{chatMessages}</ul>
    </Container>
};

export default MessageListArea;