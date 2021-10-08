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

export const showTrip = (tripId) => {
    return (dispatch) => {
        dispatch({ type: 'SHOW_TRIP' });
        return fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
        })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                //TODO: may not need set trip in state here (or at all)
                dispatch(setTrip(response.data))
                return (response.data)
            }
        })
        .catch(console.log)
    }
}

export const setTrip = trip => {
    return {
        type: "SET_TRIP",
        trip
    }
}