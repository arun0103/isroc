import axios from 'axios';
import VueAxios from 'vue-axios';
import VueJwtDecode from 'vue-jwt-decode';

const ApiService = {
  init() {
    axios.defaults.baseURL = 'http://localhost:8000/api';
  },

  setHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
  },

  removeHeader() {
    delete axios.defaults.headers.common['Authorization'];
  },

  post(resource, params) {
    return axios.post(resource, params);
  },

  get(resource, slug = '') {
    return axios.get(`${resource}/${slug}`);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  authenticate(token) {
    localStorage.setItem('token', token);
    this.setHeader();
  },

  decodeToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const { exp } = VueJwtDecode.decode(token);
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('token');
        return null;
      }
      return VueJwtDecode.decode(token);
    }
    return null;
  },

  logout() {
    localStorage.removeItem('token');
    this.removeHeader();
  },
};

export default ApiService;

export const JwtService = {
  getToken() {
    return localStorage.getItem('token');
  },

  saveToken(token) {
    localStorage.setItem('token', token);
  },

  destroyToken() {
    localStorage.removeItem('token');
  },

  decodeToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const { exp } = VueJwtDecode.decode(token);
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('token');
        return null;
      }
      return VueJwtDecode.decode(token);
    }
    return null;
  },
};

export const AuthService = {
  login(params) {
    return ApiService.post('login', params);
  },

  register(params) {
    return ApiService.post('register', params);
  },

  logout() {
    return ApiService.post('logout');
  },

  getUser() {
    return ApiService.get('user');
  },
};
