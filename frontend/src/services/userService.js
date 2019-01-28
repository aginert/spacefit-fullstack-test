import axios from 'axios';
import GlobalData from './globalData';

class UserService {
    constructor() {
        this.endPointMovies = `${GlobalData.base_endpoint}`;
        this.endPointLogin = `${GlobalData.base_endpoint}/login`;
        this.endPointRegister = `${GlobalData.base_endpoint}/register`;
    }
    async loginUser(user) {
        try {
            let result = await axios.post(this.endPointLogin, user);
            return result;
        } catch (error) {
            console.error(error);
            return {
                error:true,
            }
        }
    }
    async registerUser(user){
        try {
            let result = await axios.post(this.endPointRegister, user);
            return result;
        }catch (error) {
            console.error(error);
        }
    }
}
export default UserService;


    
    
    
    
    

