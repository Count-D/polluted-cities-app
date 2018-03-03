import React from "react";
import {Marker} from "react-google-maps";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMarker} from '../actions/Actions';
import PropTypes from 'prop-types';



class MarkersAll extends React.Component {
 
componentWillReceiveProps(){
  window.scrollTo(0,1100);
}

createMarkers(){
  return this.props.cities.map((city) =>{
  return (
    <Marker key={city.id} 
    title={city.name} 
    icon={city.icon}
    position={city.position}
    onClick={()=>this.props.selectMarker(city)}
    >
    </Marker>
  );
  }); 
}

    render(){
    return (
      <div>{this.createMarkers()}</div>
    )
}
}

function mapStateToProps(state){
  return {
    cities: state.cities
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectMarker: selectMarker}, dispatch)
}

MarkersAll.propTypes = {
  createMarkers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(MarkersAll)