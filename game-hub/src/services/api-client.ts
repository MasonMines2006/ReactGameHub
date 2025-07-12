import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9bb71b7618fa4c0b8bd312f37d9173e0'
    }
});


