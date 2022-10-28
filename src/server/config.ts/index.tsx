import axios from 'axios'

const baseAPi= axios.create({
    baseURL: 'http://Localhost:4000',
    headers: {
        "Content-Type": "application/JSON"
    },
});

export default baseAPi;