import axios from "axios";
import md5 from "md5";

const privateKey = "2b7059fea5c3151dafe9cdffb3a574b88de144cc";
const publicKey = "c8bea1857a03bd826bb33c5d2234d545";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
