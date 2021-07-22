import axios from "axios";

const instance = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/api-factory.simbirsoft1.com/api/',
	headers: {
		'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
	}
})

export const orderAPI = {
	getCars(limit) {
		return instance.get(`db/car?limit=${limit}`);
	}
}