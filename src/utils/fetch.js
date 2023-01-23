import axios from "axios";

const makeRequest = async ({ endpoint }) => {
  const res = await axios.get(endpoint);

  if (res.status === 404) {
    return undefined;
  }

  if (res.status >= 500) {
    throw new Error("A network error occured. Please try again");
  }
  return res.data;
};

export default makeRequest;
