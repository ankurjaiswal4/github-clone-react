import React, { useState } from 'react';
import './Repos.css';

const Repos = (props) => {
    const [fullDetails, setFullDetails] = useState([]);
    const [fullDetailsFetched, setFullDetailsFetched] = useState([]);

    const handleChange = (e) => {
        let text = e.target.value;
        let res = fullDetailsFetched.filter(function (item) {
            if (item.name.toLowerCase().includes(text)) {
                return true;
            }
            else {
                return false;
            }
        });
        if (text == "") {
            setFullDetails(fullDetailsFetched);
        }
        else {
            setFullDetails(res);
        }
        // console.log(res);
    }

    function fetchRecords() {
        fetch('https://api.github.com/users/supreetsingh247/repos')
            .then(response => response.json())
            .then(json => {
                setFullDetails(json);
                setFullDetailsFetched(json);
            });
    }

    if (fullDetails.length < 1) {
        fetchRecords();
    }
    return (
        <div>
            <input type="text" placeholder="Enter the repo name" onChange={handleChange}></input>
            {
                fullDetails.map((repo) =>
                    <div className="repo-item" key={repo.id}>
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
