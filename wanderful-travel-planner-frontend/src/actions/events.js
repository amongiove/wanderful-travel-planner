export const createNewEvent = (event) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/events', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(event)
            })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'CREATE_Event', event: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}