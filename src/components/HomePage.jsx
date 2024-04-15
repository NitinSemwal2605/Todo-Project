// HomePage.js
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Todo App</h1>
            <button onClick={() => { window.location.href = '/todos'; }}>Explore Todos</button>
        </div>
    );
};

export default HomePage;
