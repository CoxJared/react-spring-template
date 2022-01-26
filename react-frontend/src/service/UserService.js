import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/users';
const ADD_USER_REST_API_URL = 'http://localhost:8080/api/addUser'

class UserService {

  getUsers() {
    return axios.get(USERS_REST_API_URL);
  }

  addUser() {
    return axios.post(ADD_USER_REST_API_URL, {firstName:"custoom", lastName: "person", email:"cus"})
  }
}

export default new UserService();