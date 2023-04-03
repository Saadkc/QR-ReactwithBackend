import axios from 'axios';

const BASE_URL = 'http://192.168.0.136:3000';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user_reputation`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user_reputation/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
