import React from 'react';
import {Label} from 'semantic-ui-react';

const Message = ({avatar, isOwner, text, username}) => {
    let className = 'chatMessage';
    if (isOwner)
        className = 'ownerMessage';

    return <li className={className}>
        <Label image>
            <img src={avatar} alt={'user Avatar'}/>
            <span className={'userName'}>{username}</span>: {text}
        </Label>
    </li>;
};

export default Message;