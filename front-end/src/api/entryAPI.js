import axios from 'axios';
import {hitCheck} from "../components/MainContent/GraphSection/HitCheck";

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:3000/lab4/api/entries/'
  baseURL: 'http://localhost:8080/api/shots/'
});

const entryAPI = {
  async getEntries(token) {
    return axiosInstance.get('all', {
      headers: {
        Authorization: 'token:' + token
        //Authorization: 'token:' + token
      }
    });
  },

   checkEntry(owner,x, y, r,token) { // Для тестирования в вызовах - бредовые данные
    let promises = [];
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < r.length; j++) {
        promises = [...promises, axiosInstance.post('add', {owner:owner, x:x[i], y:y, r:r[j], status:hitCheck(x[i],y,r[j])}, {
          headers: {
            Authorization: 'token:' + token
          }
        })];
      }

    }
    Promise.all(promises).catch();
    // return axiosInstance.post('', {x, y, r, token, status}, {
    //   headers: {
    //     Authorization: 'Bearer' + token
    //   }
    // });
  },

  // clearEntries() {
  //   return axiosInstance.delete('', {
  //     headers: {
  //       Authorization: 'Bearer' + token
  //     }
  //   });
  // }
}

export default entryAPI;
