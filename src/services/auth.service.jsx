import axios from "axios";

const API_URL = "http://localhost:4000/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    const localStorageData = {
      name: response.data.user_name,
      email: response.data.email,
    };
    localStorage.setItem("user", JSON.stringify(localStorageData));
    localStorage.setItem("user_name", JSON.stringify(localStorageData.name));
  }

  return response.data;
};

const AuthService = {
  login,
};

export default AuthService;
