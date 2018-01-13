import {connect} from 'react-redux';
import MessageListArea from '../presentional/MessageListArea'

const mapStateToProps = ({chatMessageReducer}) => {
    return {messages: chatMessageReducer}
};

const MessageListAreaContainer = connect(mapStateToProps,null)(MessageListArea);
export default MessageListAreaContainer;