// İmport Alanı:
import axios from "axios";

const api=axios.create({
    baseURL:"https://api.coingecko.com/api/v3",
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-46QGgz4poJTJm5PUwTp3wNEz'},
});
export default api;

