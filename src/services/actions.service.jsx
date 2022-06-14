import axios from "axios";

const API_URL = "http://localhost:4000/";

const getUserActions = async (data) => {
  const response = await axios.post(API_URL + "user-actions", data);

  if (response.data) {
    // const results = response.data.map((row) => ({
    //   id: row.id,
    //   country: row.country,
    //   currency: row.currency,
    //   name: row.name,
    //   symbol: row.symbol,
    //   type: row.type,
    // }));
    // return results;
    return response.data;
  }
  return { message: "Error" };
};

const newUserAction = async (data) => {
  const response = await axios.post(API_URL + "add-action", data);

  if (response.data) {
    return response.data;
  }
  return { message: "Error" };
};

const deleteUserAction = async (data) => {
  const response = await axios.delete(API_URL + "delete-action/" + data.symbol);

  if (response) {
    return { message: "Action removed successfully!" };
  }
  return { message: "Error" };
};

const ActionService = {
  getUserActions,
  newUserAction,
  deleteUserAction,
  // logout,
};

export default ActionService;
