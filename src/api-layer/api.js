import axios from "axios";

export const api = {
	get: (url, config = {}) => axios.get(url, config),
	post: (url, body, config = {}) => axios.post(url, body, config ),
};