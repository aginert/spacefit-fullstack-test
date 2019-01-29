import axios from 'axios';
import GlobalData from './globalData';


class MoviesService{
    constructor(){
        this.endPointMovies = `${GlobalData.base_endpoint}/movies`;
    }
    async getMovies(){
        let config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            }
        };
        let result = await axios.get(this.endPointMovies, config);
        return result;
    }
    async findBy(query){
        this.state={
           query:[]
        };

       let config = {
           headers: {
           Authorization: 'Bearer ' + localStorage.token
          }
       };
       let result = await axios.get(this.endPointMovies +'/search?title='+query, config);
        return result;

    }



}
export default MoviesService;