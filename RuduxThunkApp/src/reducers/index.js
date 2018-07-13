
import {combineReducers} from 'redux';
import {fetchingUsers,setFetchingUserError,setFetchingUserState} from './UserReducer';

export default combineReducers({
    isFetchingUsers     :setFetchingUserState,
    errorFetchingUsers  :setFetchingUserError,
    userList            :fetchingUsers
});