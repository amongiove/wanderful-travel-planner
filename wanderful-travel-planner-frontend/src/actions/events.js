export const getEvent = (eventId) => {
    return (dispatch) => {
        dispatch({ type: 'GET_EVENT' });
        return fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
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
                return (response.data)
            }
        })
        .catch(console.log)
    }
}

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
    console.log('edit event action start');
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/events/${updatedEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(updatedEvent)
        })
        .then(resp => (resp.json()))
        .then(response => {
                console.log('reading response', response);
                if (response.error) {
                    alert(response.error)
                } else {
                    // return response.data
                    return dispatch({ type: 'EDIT_EVENT', event: response.data });
                }
        })
        .catch(error => {
            console.log('edit event action error');
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