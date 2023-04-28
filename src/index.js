import { AllProducts, UniqueProduct } from './api/testApi'
import { Accueil, Res, notFoundResponse } from './libs/responde'
import Router from './libs/router'

addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest(request) {
	const router = new Router()

	router.get('/', () => Accueil('je suis sur la page Accueil'))
	router.get('/api/?', () => GetAllProducts(request))
	router.get('/api/.+', () => getUniqueProduct(request))
	router.all(notFoundResponse)

	const response = await router.route(request)

	return response
}

const GetAllProducts = async (req) => {
	const { products } = await AllProducts()
	return Res(JSON.stringify(products))
}

const getUniqueProduct = async (request) => {
	
	const url = new URL(request.url)
	const path = url.pathname
	const match = path.split('/')
	const id = match[2]


	const product = await UniqueProduct(id)
	console.log(product, await UniqueProduct(id))

	return Res(JSON.stringify(product))

}
