export const setAccomodations = accomodations => {
    return {
        type: "SET_ACCOMODATIONS",
        accomodations 
    }
}

export const getAccomodations = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/accomodations", {
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
                dispatch(setAccomodations(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createNewAccomodation = (newAccomodaiton) => {
    return (dispatch) => {
            return fetch('http://localhost:3000/api/v1/accomodations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(newAccomodaiton)
            })
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'CREATE_ACCOMODATION', accomodation: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const editAccomodation = (updatedAccomodation) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/accomodations/${updatedAccomodation.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(updatedAccomodation)
        })
        .then(resp => (resp.json()))
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                return dispatch({ type: 'EDIT_ACCOMODATION', accomodation: response.data });
            }
        })
        .catch(error => {
            return {error: error.message}
        })
    }
}

export const deleteAccomodation = (accomodationId) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/flights/${accomodationId}`, {
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
               return dispatch({ type: 'DELETE_ACCOMODATION', accomodationId: accomodationId })  
            }
        })
        .catch(console.log)
    }
}