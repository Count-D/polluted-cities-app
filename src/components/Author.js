import React from 'react';
import WOW from "wowjs";

class Author extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        }

    render(){
    return(
        <div className="author-wrap">
            <h1>Author</h1>
        <div className="container">
    <div className="row">
        <div className="col-lg-4 wow tada" >
    <img className="rounded img-fluid" alt="" src="https://i.imgur.com/ljEkqZH.jpg"/>
</div>
    <div className="text col-lg-8">
    <h2>Dejan Dabic</h2>
    <h3>Web Developer and Environmentalist</h3>
    <p><i>"Finding a right solution to the problem is a matter of persistence, not ingenuity."</i></p>
    </div>
</div>
</div>
</div>
    );

}
}
export default Author