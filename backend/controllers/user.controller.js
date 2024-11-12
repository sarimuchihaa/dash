import { User } from "../models/user.model.js";


// POST
const registerUser = async (req, res) => {
    const { userName, role, position, email, avatar, password } = req.body;


    // Check if all required fields are provided.
    if (!userName || !email || !password) {
        return res.status(400).json({
            message: "Required fields are missing: userName, email and password."
        });
    }

    try {
        // Check if email already exists.
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use." });
        }

        // Create new user.
        const newUser = new User({
            userName,
            role,
            position,
            email,
            avatar,
            password
        });



        // Save user.
        await newUser.save();

        // Status user.
        res.status(201).json({
            message: "User registered successfully.",
            user: { userName, role, position, email, avatar, password }
        });
    // Error handling.
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({
            message: "Error registering user",
            error: error.message
        });
    }
};

export { registerUser };


// GET
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};


// GET BY ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
};