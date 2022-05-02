import axios from "axios";

export const api = {
    get: () => axios.get(url, consfig = {}),
    post: () => axios.post(url, body, config = {})
}