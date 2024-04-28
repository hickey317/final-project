import React, { useState, useEffect } from 'react';
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import './FindRoutes.css';

const FindRoutes = () => {
    const navigate = useNavigate();
    const [postalCode, setPostalCode] = useState('');
    const [cityData, setCityData] = useState(null);
   

    useEffect(() => {
        if (postalCode.length === 5) { 
            const fetchCityData = async () => {
                const apiKey = "js-djNtKcQILkHvF3X7pccVO4BEsAnPDhxrJA9w04OwGE1AfLyuTboniOdIw3bWsH56"; 
                const format = "json"; 
                const units = "degrees"; 
                const url = new URL(`https://www.zipcodeapi.com/rest/${apiKey}/info.${format}/${postalCode}/${units}`);

                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    if (data && data.city) {
                        setCityData(data.city);
                    } else {
                        setCityData('No city found for this ZIP code');
                    }
                } catch (error) {
                    console.error('Failed to fetch city data:', error);
                    setCityData('Error fetching data');
                }
            };
            fetchCityData();
        }
    }, [postalCode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/upload');
    };

    return (
        <div className='FindRoutes-Page'>
            <header >
                <Index />
            </header>
            <main>
                <section className='FindRoutes-Section'>
                    <h2>Find the routes</h2>
                    <form onSubmit={handleSubmit} className="find-form">
                        <div className="form-group">
                            <label htmlFor='postalCode'>Postal Code:</label>
                            <input 
                                type='text' 
                                id='postalCode' 
                                name='postalCode' 
                                value={postalCode} 
                                onChange={(e) => setPostalCode(e.target.value)}
                                maxLength="5"
                            />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                    {cityData && <p>{cityData}</p>}
                </section>
            </main>
        </div>
    );
};

export default FindRoutes;
