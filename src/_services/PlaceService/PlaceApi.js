import axios from "axios";

export const getPlace = async () => {
  try {
    const data = await axios.get(`${process.env.REACT_APP_API_URL}/recs`);
    return data;
  } catch (e) {
    throw e.message;
  }
};
