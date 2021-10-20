export const getEvent = (eventId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
        })
        // .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log("action response", response.data)
                // dispatch(setEvent(response.data))
                return (response.data)
            }
        })
        .catch(console.log)
    }
}

// export const setEvent = event => {
//     return {
//         type: "SET_EVENT",
//         event
//     }
// }

export const createNewEvent = (newEvent) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/events', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(newEvent)
            })
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'CREATE_EVENT', event: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const editEvent = (updatedEvent) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/events/${updatedEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            // body: JSON.stringify(updatedTrip)
        })
        .then(resp => (resp.json()))
        .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    return dispatch({ type: 'EDIT_EVENT', event: response.data });
                }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const deleteEvent = (eventId) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
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
               return dispatch({ type: 'DELETE_EVENT', eventId: eventId })  
            }
        })
        .catch(console.log)
    }
}