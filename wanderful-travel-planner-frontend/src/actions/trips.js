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

export const getTrip = (tripId) => {
    return (dispatch) => {
        dispatch({ type: 'SHOW_TRIP' });
        return fetch(`http://localhost:3000/api/v1/groups/${tripId}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
        })
        .then(resp => (resp.json()))
        // .then (console.log(response))
    }
}