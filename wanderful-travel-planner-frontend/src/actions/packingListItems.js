export const setItems = items => {
    return {
        type: "SET_ITEMS",
        items 
    }
}

export const getItems = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/packing_list_items", {
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
                dispatch(setItems(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createNewItem = (newItem) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/packing_list_items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(newItem)
            })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'CREATE_ITEM', item: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}
