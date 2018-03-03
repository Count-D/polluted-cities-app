import React from 'react';
import { Link } from "react-router-dom";

const Solutions = ()=> {
   
return(
    <div className="solutions-wrap">
        <div className="container">
        <h2>What can We Do?</h2>
        <div className="row">
        <div className="col-lg-4">
        <div className="card" >
  <img className="card-img-top" src="https://www.theecoambassador.com/images/xRenewableenergy.jpg.pagespeed.ic.XwlFtokxOY.jpg"/>
  <div className="card-body">
    <h4 className="card-title">Technological Shift to Cleaner Technologies</h4>
    <p className="card-text">We know that our dependency on fossil fuel for energy generation is one of the major causes of air pollution...</p>
  </div>
</div>
</div>
<div className="col-lg-4">
        <div className="card" >
  <img className="card-img-top" src="https://www.theecoambassador.com/images/xAirpollution7.jpg.pagespeed.ic.5jEPw5_cF5.jpg"/>
  <div className="card-body">
    <h4 className="card-title">Pollution Prevention and Treatment</h4>
    <p className="card-text">Air pollution can be prevented by treating the point source emissions (polluted air emissions from factories, industries etc.) with appropriate treatment technologies...</p>
  </div>
</div>
</div>
<div className="col-lg-4">
        <div className="card" >
  <img className="card-img-top" src="http://www.vatnsholt.com/wp-content/uploads/2016/08/Procedimiento--1160x600.jpg"/>
  <div className="card-body">
    <h4 className="card-title">Laws and Regulations at National level</h4>
    <p className="card-text">Laws and regulation always plays an important part to control pollution. That is why Government of different countries should adopt  air pollution control laws and regulatory efforts to identify and categorized different air pollutants...</p>
  </div>
</div>
</div>

<div className="mx-auto col-lg-4">
        <div className="card" >
  <img className="card-img-top" src="https://www.theecoambassador.com/images/xCOP21participants.jpg.pagespeed.ic.DMVh2MjJ2b.jpg"/>
  <div className="card-body">
    <h4 className="card-title">Discharge Reduction Agreement at International Level</h4>
    <p className="card-text">As we know that air pollution cannot be confined in local or national level, as it spreads its effect to global scale and can produce long term impact on earth’s climate...</p>
  </div>
</div>
</div>
<div className="mx-auto col-lg-4">
        <div className="card" >
  <img className="card-img-top" src="https://www.theecoambassador.com/images/xBiketowork.jpg.pagespeed.ic.ZCuqsJbnf8.jpg"/>
  <div className="card-body">
    <h4 className="card-title">Creating Awareness and Changing Habits</h4>
    <p className="card-text">Human activities are one of the major contributors to air pollution worldwide. If we make better choices in terms of technologies and products and chose the less polluting ones, we can curb down the pollution...</p>
  </div>
</div>
</div>
    </div>
    <Link to="/solutions"><button className="btn">Learn More</button></Link>
    </div>
    </div>
    
);
}
export default Solutions