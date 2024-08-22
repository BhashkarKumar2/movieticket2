import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    // Ensure the response includes a success property
    return { success: true, ...response.data };
  } catch (error) {
    console.error('Error registering user:', error);
    // Return an object indicating failure
    return { success: false, error: error.message };
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    // Ensure the response includes a success property
    return { success: true, ...response.data };
  } catch (error) {
    console.error('Error logging in user:', error);
    // Return an object indicating failure
    return { success: false, error: error.message };
  }
};
