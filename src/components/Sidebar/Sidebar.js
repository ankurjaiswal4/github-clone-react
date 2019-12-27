import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

    const [details, setDetails] = useState({});

    fetch('https://api.github.com/users/supreetsingh247')
        .then(response => response.json())
        .then(json => setDetails(json));

    return (
        <div className="sidebar">
            {/* avatar */}
            <img className="avatar" src={details.avatar_url} alt=""></img>
            {/* fullname */}
            <div className="fullname">
                <strong>{details.name}</strong>
            </div>
            {/* username */}
            <div className="username">
                <code>{details.login}</code>
            </div>
            {/* bio */}
            <div className="bio">{details.bio}</div>

            {/* company */}
            <div className="company">{details.company}</div>
            {/* location */}
            <div className="location">{details.location}</div>
            {/* html_url */}
            <div className="html-url">
                <a href={'https://github.com/login?return_to=' + details.html_url}>Sign in to view email</a>
            </div>

            <div className="block">
                Block or Report
            </div>

        </div>
    )
}

export default Sidebar;
