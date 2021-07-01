import axios from 'axios';

const USER_API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

   createUser(user){
       return axios.post(USER_API_BASE_URL,{user});
   }

   deleteUser(id){
       console.log("deleting"+USER_API_BASE_URL+`/id`)
    return axios.delete(USER_API_BASE_URL+`/id`)
   }
}

export default new UserService()