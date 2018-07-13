import TypeAction from './TypeAction';

export const fetchingUsersSuccess = (userList) =>{
    type: TypeAction.FETCHING_USERS_REQUEST,
    userList
}

export const fetchingUsersFailure = (error) =>{
    type: TypeAction.FETCHING_USERS_REQUEST,
    error
}

export const fetchingUsersState = (isFetching) =>{
    type: TypeAction.FETCHING_USERS_STATE,
    isFetching
}

export const fetchingUsers =()=>{

    return async dispatch =>{
        dispatch(fetchingUsersState(true));
        try{
            let response = await fetch("https://randomuser.me/api/?results=20");
            let json =await response.json();
            dispatch(fetchingUsersState(false));
            dispatch(fetchingUsersSuccess(json.results));
        }catch(error){
            dispatch(fetchingUsersState(false));
            dispatch(fetchingUsersFailure(error))
        }
    }
}
