
/*const mapStateToProps = function(state){
    return {
        is_login: state.is_login,
    }
}*/
const userReducer = (state={is_login:false}, action)=>{

    switch(action.type){
        case 'LOGIN_USER':
            return {token: action.token,is_login: true}

        case 'REGISTER_USER':
            return {token: action.token,is_login: true}

        case 'LOGOUT_USER':
            return state= [];
        default:
            return state;
    }
}

export default userReducer;