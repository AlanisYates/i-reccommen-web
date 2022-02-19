import axios from "axios";

export const getAllPlaces = async () => {
  try {
    const data = await axios
      .get(`${process.env.REACT_APP_API_URL}/recs`)
      .then((res) => res.data.data);
    return data;
  } catch (e) {
    throw e.message;
  }
};

export const addPlace = async (recList) => {
  const testData = {};
  try {
    const data = await axios
      .post(`${process.env.REACT_APP_API_URL}/recs`, recList)
      .then((res) => res.data);
    return data;
  } catch (e) {
    throw e.message;
  }
};
