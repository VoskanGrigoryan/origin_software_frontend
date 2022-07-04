import axios from "axios";

const API_BASE_URL = `https://api.twelvedata.com/`;

const getCotization = async (data) => {
  const URL =
    API_BASE_URL +
    "time_series?symbol=" +
    data.symbol +
    "&interval=" +
    data.interval +
    "&start_date=" +
    data.date_from +
    "%&end_date=" +
    data.date_to +
    "%&apikey=" +
    process.env.REACT_APP_TWELVE_DATA_API_KEY;
  const response = await axios.get(URL);

  if (response.data) {
    return response.data;
  }
  return { message: "Error" };
};

const DetailService = {
  getCotization,
};

export default DetailService;
