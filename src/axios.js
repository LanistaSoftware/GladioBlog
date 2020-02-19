 import Axios from 'axios'

 const instance = Axios.create({
    baseURL:"http://localhost:2500/api"
 })
 //instance.defaults.headers.common // şeklinde çağırabiliriz. 

 export default instance;