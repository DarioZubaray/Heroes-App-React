import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ])
    // const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <HeroeCard key={ hero.id } { ...hero } />
                ))
            }
        </div>
    )
}
