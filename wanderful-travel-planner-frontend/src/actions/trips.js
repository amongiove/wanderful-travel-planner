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
                console.log("set trip in getTrips")
                console.log(response.data)
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
                console.log("set trip in showTrip")
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

export const createNewTrip = (trip, history) => {
    return (dispatch) => {
        // dispatch({ type: 'SET_TRIPS' });
            return fetch('http://localhost:3000/api/v1/trips', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(trip)
            })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log("dispatching CREATE_TRIP");
                return dispatch({ type: 'CREATE_TRIP', trip: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}