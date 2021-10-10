const initialState = {
    name: "",
    location: "",
    start_date: "",
    end_date: "",
  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_TRIP_FORM":
        const returnVal = {
          ...state,
          [action.formData.name]: action.formData.value
        }
        return returnVal
      case "RESET_TRIP_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.tripFormData
      default:
        return state
    }
  }