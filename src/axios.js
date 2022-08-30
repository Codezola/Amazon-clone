import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-e-clone-ad3b4.cloudfunctions.net/api"
});

export default instance;