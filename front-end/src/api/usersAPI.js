import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:3000/lab4/api/auth/'
  baseURL: 'http://localhost:8080/api/users/'
});

const usersAPI = {

  async getUsers(token) {
    return axiosInstance.get('all', {
      headers: {
        Authorization: 'token:' + token
        //Authorization: 'token:' + token
      }
    });
  },
}

export default usersAPI;
