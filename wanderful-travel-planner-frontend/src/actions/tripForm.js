//need this???
export const updateTripForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_TRIP_FORM",
      formData
    }
}
  