import axios from 'axios';

const KEY = 'AIzaSyAOWSyU_x9Nmvv54G5Nw1z5YRZPjbzSl3A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5, 
        type: 'video', 
        key: KEY
    }
});