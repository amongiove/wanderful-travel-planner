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

export const createNewFlight = (newFlight) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/flights', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(newFlight)
            })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log('action resopnse', response.data)
                return dispatch({ type: 'CREATE_FLIGHT', flight: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const editFlight = (updatedFlight) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/flights/${updatedFlight.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(updatedFlight)
        })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'EDIT_FLIGHT', event: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const deleteFlight = (flightId) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/flights/${flightId}`, {
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
               return dispatch({ type: 'DELETE_FLIGHT', flightId: flightId })  
            }
        })
        .catch(console.log)
    }
}