import axios from "axios";

export const api = {
	get: (url, config = {}) => axios.get(url, config),
	patch: (url, body, config = {}) => axios.patch(url, body, config ),
};