import TypeAction from '../actions/TypeAction';

export const setFetchingUserState =(isFetching = false, action )=>{
    if (action.type === TypeAction.FETCHING_USERS_STATE){
        return action.isFetching;
    }  
    return isFetching;
} 

export const setFetchingUserError =(error = "", action )=>{
    if (action.type === TypeAction.FETCHING_USERS_FAILURE){
        return action.error;
    }  
    return error;
} 

export const fetchingUsers =(state = [],action)=>{

    switch(action.type){
        case TypeAction.FETCHING_USERS_SUCCESS:{
            return action.userList?action.userList:[];
        }
        case TypeAction.FETCHING_USERS_FAILURE:{
            return [];
        }
        default:{
            return state;
        }
    }
}