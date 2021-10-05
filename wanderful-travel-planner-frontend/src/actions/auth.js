import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getTrips } from "./trips.js"


export const setLoggedIn = () => {
    return dispatch => {
        if (localStorage.token) dispatch({ type: 'USER_RETURN' });
      }
}

export const logout = (history) => {
    return (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        dispatch({ type: 'LOGOUT' });
        // TODO: need to redirect to welcome page 
        // history.push("/");
    }
}

export const login = (formData, history) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
          } else {
            localStorage.setItem('token', response.jwt);
            localStorage.setItem('userId', response.user.data.id);
            dispatch(resetLoginForm());
            dispatch(getTrips());
            history.push("/home");
            return dispatch({ type: 'USER_AUTH'});
          }
        })
        .catch(error => {
          return {error: error.message}
        })
    }
}

export const signup = (formData, history) => {
    return dispatch => {
        //fetch to backend
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log(response)
                localStorage.setItem('token', response.jwt);
                localStorage.setItem('userId', response.user.data.id);
                dispatch(resetSignupForm());
                history.push("/home");
                return dispatch({ type: 'USER_AUTH'});
            }
        })
        .catch(console.log)
    }
}

// export const clearCurrentUser = () => {
//     return dispatch => {
//         dispatch(clearCurrentUser())
//         return fetch("http://localhost:3000/api/v1/logout", {
//             credentials: "include",
//             method: "DELETE",
//         })
//     }
// }

//need this?

export const getCurrentUser = () => {
    // return dispatch => {
    //     return fetch("http://localhost:3000/api/v1/get_current_user", {
    //         credentials: "include",
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(r => r.json())
    //     .then(response => {
    //       if (response.error) {
    //         alert(response.error)
    //       } else {
    //         dispatch(setCurrentUser(response.data))
    //         dispatch(getTrips())
    //       }
    //     })
    //     .catch(console.log)
    // }

    return dispatch => {
        if (localStorage.token) dispatch({ type: 'USER_RETURN' });
    }
}