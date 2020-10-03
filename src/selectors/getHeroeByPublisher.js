import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['All', 'DC Comics', 'Marvel Comics']

    if ( !validPublisher.includes(publisher) ) {
        throw new Error(`El publisher "${ publisher }" no es correcto.`)
    }

    return heroes.filter( heroe => (publisher === 'All') ? true : heroe.publisher === publisher)
}