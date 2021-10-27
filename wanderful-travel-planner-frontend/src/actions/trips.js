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
        dispatch({ type: 'GET_TRIP' });
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

export const createNewTrip = (formData) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/trips', {
            method: "POST",
            headers: {
                // "Content-Type": 'multipart/form-data;',
                // "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: formData
            })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'CREATE_TRIP', trip: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const editTrip = (updatedTrip) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/trips/${updatedTrip.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(updatedTrip)
        })
        .then(resp => (resp.json()))
        .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch({ type: 'EDIT_TRIP', trip: response.data });
                }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const deleteTrip = (tripId) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(resp => (resp.json()))
      .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
               return dispatch({ type: 'DELETE_TRIP', tripId: tripId })  
            }
        })
        .catch(console.log)
    }
}