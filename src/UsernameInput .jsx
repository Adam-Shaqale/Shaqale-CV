const UsernameInput = ({ onUsernameChange }) => {
    const handleChange = (event) => {
        onUsernameChange(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Enter your username"
            onChange={handleChange}
        />
    );
};

export default UsernameInput;