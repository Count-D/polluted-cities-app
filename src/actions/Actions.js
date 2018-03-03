export const selectMarker = (city) => {

    return {
        type: "MARKER_SELECTED",
        payload: city
    }
};

/*export const removeCity = (nothing)=> {
    return {
        type: "REMOVE_CITY",
        payload: nothing
    }
}; */