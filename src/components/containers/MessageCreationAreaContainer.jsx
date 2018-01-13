import MessageCreationArea from '../presentional/MessageCreationArea.jsx';
import {connect} from 'react-redux';
import {setUserName, submitMessage} from '../../actions/actions';

const mapStateToProps = ({sendMessageReducer}) => {
    return {message: sendMessageReducer}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeName: value => dispatch(setUserName(value)),
        submitMessage: value => dispatch(submitMessage(value, ownProps.socket))
    }
};


const MessageCreationAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MessageCreationArea);
export default MessageCreationAreaContainer;