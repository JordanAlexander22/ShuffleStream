
export const userActions = {
    login,
    logout,
    register,
};

function register (user) {
    return dispatch => {
        dispatch(request(user));
    }
}