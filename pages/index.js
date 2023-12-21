import React, { useState, useEffect } from 'react';

const Home = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        // Fetch data from the Django API
        fetch('http://localhost:8000/api/greeting/')
            .then(response => response.json())
            .then(data => setGreeting(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Hello from Next.js!</h1>
            <p>{greeting}</p>
        </div>
    );
};

export default Home;