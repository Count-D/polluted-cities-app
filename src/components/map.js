import React from "react"
import { compose, withProps} from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import MarkersAll from './markers';

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyALJtFGGPPOowxAsox9ip3CMMrFAU1mZ0U&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{  height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
<div className="container">
  <div className="row">
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 30.375, lng: 69.345}}
  >
  <MarkersAll/>
  </GoogleMap>
  </div>
  </div>
 
  
)


export default Map