import axios from "axios";
import { API_URL } from '../../config/environment/config.env.js';

export default {
  Query: {
    joke: async (_, { category }) => {
      try {
        const res = await axios.get(`${API_URL}/random?category=${category}`);
        return res.data;
      }
      catch (err) {
        console.log(err);
      }

    }
  }
}
