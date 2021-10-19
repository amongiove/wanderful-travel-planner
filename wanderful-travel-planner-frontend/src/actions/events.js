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