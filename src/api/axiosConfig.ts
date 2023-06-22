import axios from "axios";
import md5 from "md5";

const privateKey = "2b7059fea5c3151dafe9cdffb3a574b88de144cc";
const publicKey = "c8bea1857a03bd826bb33c5d2234d545";

const time = Number(new Date());
console.log(time);

const hash = md5(time + privateKey + publicKey);

const baseURL = `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
