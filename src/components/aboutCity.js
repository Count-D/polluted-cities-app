import React,{Component} from "react";
import {connect} from 'react-redux';


class AboutCity extends Component {

    componentDidUpdate(){
        window.scrollTo(0,750);
    }
    removeCity=()=>{
        this.props.dispatch({type: "REMOVE_CITY"});
    };

    render(){
        if(!this.props.city){
            return null 
            
        }

        return (
            <div className="about container">
                
               <button className="btn" onClick={this.removeCity}>&times;</button>
                <h2>{this.props.city.name}</h2>
                <div className="row">
                <div className="image col-lg-6 col-xs-6">
                <img src={this.props.city.image}/>
                </div>
                <div className="col-lg-6 col-xs-6">
                <p>{this.props.city.about}</p>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      city: state.activeCity
    };
  }
 

  export default connect(mapStateToProps)(AboutCity)