import React, { useState } from 'react';
import UsernameDisplay from './UsernameDisplay';
import UsernameInput from './UsernameInput ';

const Output = () => {
    const [username, setUsername] = useState('');

    const handleUsernameChange = (newUsername) => {
        setUsername(newUsername);
    };

    return (
        <div>
            <UsernameInput onUsernameChange={handleUsernameChange} />
            <UsernameDisplay username={username} />
        </div>
    );
};

export default Output;
