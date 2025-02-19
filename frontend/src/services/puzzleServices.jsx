import axios from "axios";

const getPuzzle = async () => {
  const response = await axios.get("http://localhost:5000/api/puzzle");
  return response.data;
};

export default { getPuzzle };
