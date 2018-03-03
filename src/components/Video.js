 import React from 'react';
 import Pollution from '../Video/Pollution.mp4';

 const Video = ()=> {
    return (
    
        <div className="video-wrap">
    <video className='video-background' loop autoPlay muted>
        <source src={Pollution} type="video/mp4"/>
    </video>
    <div className="video-overlay"></div>
    <div className="header-1 text-md-center">
        <div className="container">
    <h1>Do you know what are you Breathing ?</h1>
    <p>Air pollution is perceived as a modern-day curse: a by-product of increasing urbanization and industrialization. It does, however, have a long and evolving history with interesting transitions in line with economic, technological and political change...</p>
    </div>
    </div>
    </div>
    
    
    );
}
export default Video


