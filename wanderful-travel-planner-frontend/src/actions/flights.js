export const setFlights = flights => {
    return {
        type: "SET_FLIGHTS",
        flights 
    }
}

export const getFlights = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/flights", {
        credentials: "include",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setFlights(response.data))
            }
        })
        .catch(console.log)
    }
}
