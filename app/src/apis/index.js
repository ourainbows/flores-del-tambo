import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030", // Instance of Axios. All of the calls will simply require the URI for the HTTP calls, without the full URL.
});
