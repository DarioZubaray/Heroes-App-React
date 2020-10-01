import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById'

export const HeroeScreen = ({ history }) => {

    const { heroeId } = useParams()

    const heroe = getHeroesById(heroeId)

    if ( !heroe ) {
        return <Redirect to="/" />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = heroe

    const handleReturn= () => {
        if ( history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={ superhero } className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: { alter_ego }</b>
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: { publisher }</b>
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: { first_appearance }</b>
                    </li>
                </ul>

                <hr/>
                <h5>Characters</h5>
                <p>{ characters }</p>

                <button className="btn btn-outline-primary" onClick={ handleReturn }>Return</button>
            </div>
        </div>
    )
}
