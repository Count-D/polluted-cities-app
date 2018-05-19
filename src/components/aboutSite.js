import React from 'react';
import WOW from "wowjs";

const Intro = ()=> {
    return(
    <div className="container">
        <div className="intro-text">
    <h1>About</h1>
    <p>This is a small project with the idea to spread awareness of Air Pollution in Large industrial Cities across the world and solutions for this problem. You can see most polluted Cities of the World on a map below and as you <i>Click</i> on Marker, you will see the information about how polluted is the chosen City with the image of it, Also, as you scroll down you will be presented with the sollutions you can find more about on a Learn more page.</p>
    <h3 className="click wow zoomIn" data-wow-duration="0.5s">CLICK ON A CITY</h3>
    </div>
    </div>
    );
}
export default Intro