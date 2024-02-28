import React, { useState, useEffect } from 'react';
import { Link } from 'react'

function Header(props) {
    //use state
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchRandomBook() {
            try {
                //generate a random number for the api call
                const randomNumber = Math.floor(Math.random() * (2000000 - 1300000 + 1) + 13000000);
                //make the api call
                const response = await fetch(`https://covers.openlibrary.org/b/id/${randomNumber}.json`);

                if (response.ok) {
                    const data = await response.json();
                    const fetchedImageUrl = data.source_url || null;
                    setImageUrl(fetchedImageUrl);
                } else {
                    console.error('Failed to fetch data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchRandomBook();
    }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

    return (
        <div className="header">
            
            {imageUrl && <img className="show-book" src={imageUrl} alt="Random Book" />}
            
            <h1>Tome Cat</h1>
            
        </div>
    );
}

export default Header;