import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const HomeScreen = () => {
    return (
        <div>
            <h1>Home Screen</h1>
            <hr/>

            <HeroeList publisher="All" />
        </div>
    )
}