export const setAccommodations = accommodations => {
    return {
        type: "SET_ACCOMMODATIONS",
        accommodations 
    }
}

export const getAccommodations = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/accommodations", {
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
                dispatch(setAccommodations(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createNewAccommodation = (newAccommodaiton) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/accommodations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(newAccommodaiton)
            })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'CREATE_ACCOMMODATION', accommodation: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const editAccommodation = (updatedAccommodation) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/accommodations/${updatedAccommodation.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(updatedAccommodation)
        })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'EDIT_ACCOMMODATION', accommodation: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const deleteAccommodation = (accommodationId) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/accommodations/${accommodationId}`, {
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
               return dispatch({ type: 'DELETE_ACCOMMODATION', accommodationId: accommodationId })  
            }
        })
        .catch(console.log)
    }
}