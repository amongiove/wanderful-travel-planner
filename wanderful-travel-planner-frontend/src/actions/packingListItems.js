export const setItems = items => {
    return {
        type: "SET_ITEMS",
        items 
    }
}
export const getItems = (tripId) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/packing_list_items", {
        credentials: "include",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: {
            tripId: tripId
        }
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log(response)
                dispatch(setItems(response.data))
            }
        })
        .catch(console.log)
    }
}

