export const loginUser = (data)=>{
    return {
        type: 'LOGIN_USER',
        token: data.data.data
    }
}

export const registerUser = (data)=>{
    return{
        type: 'REGISTER_USER',
        data: data.data.data
    }
}

/*export const logoutUser=()=> {
    return {
        type: 'LOGOUT_USER'
    }
}*/

