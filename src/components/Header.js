import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchRandomBook() {
            try {
                const randomNumber = Math.floor(Math.random() * (2000000 - 1300000 + 1) + 13000000);
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
    }, []);

    return (
        <div className="header">
            <div className='randoBook'>
                {imageUrl && <img className='header-image' src={imageUrl} alt="Random Book" />}
            </div>

            <div className="about-button">
                <Link className="devButton" to="/about">
                    About
                </Link>
            </div>

            <div className='title'>
                <h1>Tome Cat</h1>
            </div>
        </div>
    );
}

export default Header;