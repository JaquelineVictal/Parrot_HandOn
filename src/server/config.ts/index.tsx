import axios from 'axios'

const baseAPi= axios.create({
    baseURL: 'http://Localhost:8000',
    headers: {
        "Content-Type": "application/JSON"
    },
});

export default baseAPi;