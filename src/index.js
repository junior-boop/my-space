import { AllProducts, UniqueProduct } from "./api/testApi";
import { Accueil, Res, notFoundResponse } from "./libs/responde";
import Router from "./libs/router";

export default {
	async fetch(request, env, ctx) {
		const router = new Router()

		router.get('/', () => Accueil('je suis sur la page Accueil'))
		router.get('/api', () => GetAllProducts(request))
		router.all(notFoundResponse)

		const response = await router.route(request)

		return response;
	},
};

const GetAllProducts = async (req) => {
	const { products } = await AllProducts()
	console.log(products)
	return Res(JSON.stringify(products))
}

const getUniqueProduct = async () => {
	const const { products } = await UniqueProduct()
}