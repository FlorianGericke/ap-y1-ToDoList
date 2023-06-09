const axios = require("axios");

export class authApi {
    static api = axios.create({
        baseURL: 'http://'+ document.location.hostname +':4001/auth/',
        withCredentials: true
    });

    static register = async (username, password) => {
        return await this.api.post('/register', {
            username: username,
            password: password
        });
    }

    static login = async (username, password) => {
        return await this.api.post('/login', {
            username: username,
            password: password
        });
    }

    static logout = async () => {
        return await this.api.post('/logout', {});
    }
}

export class todoApi {
    static api = axios.create({
        baseURL: 'http://'+ document.location.hostname +':4001/todo/',
        withCredentials: true
    });

    static add = async (task, priority) => {
        return await this.api.post('/add', {
            task: task,
            priority: priority
        });
    }

    static getAll = async () => {
        return await this.api.get('/all');
    }

    static setDone = async (id) => {
        return await this.api.put(`/done/${id}`);
    }

    static setUndone = async (id) => {
        return await this.api.put(`/unDone/${id}`);
    }

    static delete = async (id) => {
        return await this.api.delete(`/delete/${id}`);
    }
}

export default axios;
