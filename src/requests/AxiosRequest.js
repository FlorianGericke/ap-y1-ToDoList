const axios = require("axios");
class requests{
    static login = async (data) =>{
        let prom;
            return await axios.post('http://localhost:4001/auth/login', data);
    }

    static getTodos = async () =>{
        let prom;
        try {
            return await axios.get('http://localhost:4001/todo/all');
        } catch (error) {
            console.error(error);
        }
    }
    static logout = async () =>{
        let prom;
        try {
            return await axios.post('http://localhost:4001/auth/logout');
        } catch (error) {
            console.error(error);
        }
    }
}

export default requests;