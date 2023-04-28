const getJson = async url => {
    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Url a un probleme de connexion')
    }

    return await response.json()
}


export const AllProducts = () => getJson('https://dummyjson.com/products/')
export const UniqueProduct = id => getJson(`https://dummyjson.com/products/${id}`)