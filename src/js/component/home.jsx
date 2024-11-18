import React from "react";

const Home = (props) => {
	return (
        <div className="bigCounter">
        <i className="far fa-clock clock"></i>
        <div className="n5">{props.cinco}</div>
        <div className="n4">{props.cuatro}</div>
        <div className="n3">{props.tres}</div>
        <div className="n2">{props.dos}</div>
        <div className="n1">{props.uno}</div>
    </div>
    
	);
};

export default Home;
