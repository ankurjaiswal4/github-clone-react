import React, { useState } from 'react';
import './Repos.css';

const Repos = (props) => {
    const [fullDetails, setFullDetails] = useState([]);

    fetch('https://api.github.com/users/supreetsingh247/repos').then(response => response.json()).then(json => setFullDetails(json));

    return (
        <div>
            {
                fullDetails.map((repo) =>
                    <div className="repo-item">
                        <div className="name">
                            <a href={repo.html_url}>{repo.name}</a>
                        </div>
                        <div className="description">{repo.description}</div>
                        <div>
                            <span className="language"><span className="badge"></span>{repo.language}</span>
                            <span className="updated">{repo.updated_at}</span>
                        </div>
                        <div className="stars">{repo.stars}</div>
                    </div>
                )
            }
            {/* {fullDetails[0].id} */}

        </div>
    )
}

export default Repos;
