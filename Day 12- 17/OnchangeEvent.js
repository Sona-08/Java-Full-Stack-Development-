import React from 'react';

export const OnchangeEvent = () => {
    const handleChange = (e) => {
        const value = e.target.value;
        document.getElementById("res").textContent = value;
    };
    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
            />

            <h1 id="res"></h1>
        </div>
    );
};