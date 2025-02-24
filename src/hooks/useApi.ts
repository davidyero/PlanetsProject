import axios from 'axios';
import {URL_BACKEND_API} from '../shared/constants/links.ts';

export const useApi = () => {
  axios.defaults.baseURL = URL_BACKEND_API;

  const API_GET = async (url: string, data?: any) => {
    try {
      const response = await axios.get(url, {data: data});
      return response.data;
    } catch (error) {
      console.error('API_GET', error);
      throw error;
    }
  };

  const API_POST = async (url: string, data: any) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('API_POST', error);
      throw error;
    }
  };

  const API_DELETE = async (url: string, email: string, password: string) => {
    try {
      const response = await axios.delete(url, {data: {email, password}});
      return response.data;
    } catch (error) {
      console.error('API_DELETE', error);
      throw error;
    }
  };

  const API_PUT = async (url: string, data: any) => {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      console.error('API_PUT', error);
      throw error;
    }
  };

  return {
    API_GET,
    API_POST,
    API_DELETE,
    API_PUT,
  };
};
