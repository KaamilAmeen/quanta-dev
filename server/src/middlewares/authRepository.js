const pool = require('../config/dbConfig');
const bcrypt = require('bcryptjs');

// Function to handle user sign up

const signUp = async (username, email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
        console.error({error: error.message});
    }
}