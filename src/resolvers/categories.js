import axios from 'axios';
import { API_URL } from '../../config/environment/config.env.js';

export default {
  Query: {
    categories: async () => {
      try {
        const res = await axios.get(`${API_URL}/categories`);
        return await res.data;
      } 
      catch (err) {
        console.log('', err);
      }
    }
  }
}