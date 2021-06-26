import axios from 'axios';
import {BASE_URL} from './constants/constants';
const Instance = axios.create({
    baseURL:BASE_URL
})

export default Instance;