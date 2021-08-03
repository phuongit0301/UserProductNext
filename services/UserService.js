import axios from "axios";

// *** Add you theMoviedb.org token here ***
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTY3OGZiNDI4M2M1MTNhODAxYTFmODBjY2VjODllNiIsInN1YiI6IjYwNTZjZDJlNDU1N2EwMDA1MjEyZjU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PZg60jSNXGULeBIz692I93xjbyqZ_MOz0AyNJ7_lKWU";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.headers.common["Content-Type"] = `application/json;`;
// axios.defaults.headers.common['Authorization'] = `bearer ${AUTH_TOKEN}`;

const signin = (body) => {
  return axios({
    method: "POST",
    url: "/user/signin",
    data: body,
  });
};

export default {
  signin,
};
