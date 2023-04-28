export const Accueil = message => new Response(message)

export const Res = message => new Response(message)

export const notFoundResponse = () =>
    new Response("page not found", {
        headers: { 'content-type': 'text/plain' },
        status: 404,
    })