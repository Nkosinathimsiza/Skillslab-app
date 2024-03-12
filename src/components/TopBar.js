import React from 'react';

// Replace the URL with the actual URL of your desired logo image
const logoImageUrl = 'https://example.com/path/to/your-logo.png';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="logo">
                <img src={logoImageUrl} alt="Your Logo" style={{ maxWidth: '100px' }} />
            </div>
            <ul className="menu-bar">
                <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                <li className="menu-item"><a href="#" className="menu-link">About</a></li>
                <li className="menu-item"><a href="#" className="menu-link">Services</a></li>
                <li className="menu-item"><a href="#" className="menu-link">Contact</a></li>
            </ul>
        </div>
    );
};

export default TopBar;
