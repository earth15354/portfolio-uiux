import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';

function NoPage() {
    return (
        <div>
            <Navbar />
            <h2>Error 404: Not found (this page is still in progress!)</h2>
        </div>
    );
}

export default NoPage;
