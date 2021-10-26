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