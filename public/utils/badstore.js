import axios from 'axios';

class Store {
    user = false;
    checkLogin = () => {
        axios({
            url: 'http://localhost:3000/user',
            method: 'get',
            withCredentials: true,
        })
        .then(() => {
            console.log('I logged in');
            this.user = true;
        })
        .catch((error) => {
            console.log('error!', error);
            this.user = false;
        })
    }

    login = (email, password) => {
        axios({
            url: 'http://localhost:3000/user/login',
            method: 'post',
            data: {
                email,
                password
            },
            withCredentials: true,
        })
        .then(() => {
            console.log('I logged in');
            this.user = true;
        })
        .catch((error) => {
            console.log('error!', error);
            this.user = false;
        })
    }

    logout = () => {

    }
}

module.exports = new Store();