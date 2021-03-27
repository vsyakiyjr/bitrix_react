// function setToken(req) {
//   const token = localStorage.getItem("token");
//   req.headers["Authorization"] = token;
//   return req;
// }

export default function (axios) {
  axios.interceptors.request.use();
}
