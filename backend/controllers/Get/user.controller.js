const registerUser = async (req, res) => {
    try {
        res.status(200).json({
           message: "User registered successfully."
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({
            message: "Error registering user",
            error: error.message
        });
    }
};

export { registerUser };