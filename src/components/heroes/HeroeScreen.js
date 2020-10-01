import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById'

export const HeroeScreen = () => {

    const { heroeId } = useParams()

    const heroe = getHeroesById(heroeId)

    if ( !heroe ) {
        return <Redirect to="/" />
    }

    console.log( heroe )

    return (
        <div>
            <h1>Heroe Screen</h1>
        </div>
    )
}
