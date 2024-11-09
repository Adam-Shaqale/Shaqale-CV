const UsernameDisplay = ({ username }) => {
    return (
        <div>
            {username ? (
                <h2>Your Username: {username}</h2>
            ) : (
                <h2>Please enter a username</h2>
            )}
        </div>
    );
};

export default UsernameDisplay;