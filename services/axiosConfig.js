import axios from 'axios';
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'https://5ea46ccd270de600164604cd.mockapi.io/employee/api/v1'
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;