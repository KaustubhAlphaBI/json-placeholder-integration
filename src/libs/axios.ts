import { BASE_API_URL } from '@/constants';
import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: BASE_API_URL,
});


export default instance