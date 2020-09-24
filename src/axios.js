import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-32d92.cloudfunctions.net/api"
  // localhost url "http://localhost:5001/clone-32d92/us-central1/api", // the api url
});

export default instance;
