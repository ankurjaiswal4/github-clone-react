import React, { useState } from 'react';
import './Details.css';
import Repos from '../../pages/Repos';

const Details = (props) => {

    return (
        <div className="details">
            <ul className="nav">
                <li className="nav-item"><a href="#">Overview</a></li>
                <li className="nav-item"><a href="#" className="active">Repositories</a><span className="badge">4</span></li>
                <li className="nav-item"><a href="#">Projects</a><span className="badge">2</span></li>
                <li className="nav-item"><a href="#">Stars</a><span className="badge">5</span></li>
                <li className="nav-item"><a href="#">Followers</a><span className="badge">2</span></li>
                <li className="nav-item"><a href="#">Following</a><span className="badge">5</span></li>
            </ul>
            <Repos></Repos>
        </div>
    )
}

export default Details;
