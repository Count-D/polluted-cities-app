export default function(state=null, action) {
    switch(action.type){
        case "MARKER_SELECTED":
        return action.payload;
        break;
        case "REMOVE_CITY":
        return action.payload = null;
        break;   
       
    }
    return state;
}