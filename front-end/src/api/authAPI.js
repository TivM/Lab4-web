import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:3000/lab4/api/auth/'
  baseURL: 'http://localhost:8080/auth/'
});

const authAPI = {
  async login(username, password) {
    //return axiosInstance.post('login', { username, password });
    return axiosInstance.post('login', { username:username, password:password });
  },

  async register(username, password) {
    //return axiosInstance.post('registration', { username, password });
    return axiosInstance.post('register', { username:username, password:password });
  },
}

export default authAPI;
