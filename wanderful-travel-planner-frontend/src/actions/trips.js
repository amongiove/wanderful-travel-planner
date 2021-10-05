export const setTrips = trips => {
    return {
        type: "SET_TRIPS",
        trips 
    }
}

export const getTrips = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/trips", {
        credentials: "include",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
            alert(response.error)
            } else {
            dispatch(setTrips(response.data))
            }
        })
        .catch(console.log)
    }
}