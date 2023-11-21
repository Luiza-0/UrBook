import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: 'AIzaSyAQZ6qsHkkNVh8rTLkIeKXuC_vbG3SCHEs',
  },
});

export default api;