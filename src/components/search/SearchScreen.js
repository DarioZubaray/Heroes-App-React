import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { getHeroeByName } from '../../selectors/getHeroeByName'
import { useForm } from '../../hooks/useForm'
import { HeroeCard } from '../heroes/HeroeCard'

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = ''} = queryString.parse(location.search)

    const [ values, handleInputChange ] = useForm({ search: q })
    const { search } = values

    const heroesFiltrados = useMemo(() => getHeroeByName( q ), [q])

    const handleSubmit= (e) => {
        e.preventDefault()
        history.push(`?q=${ search }`)
        console.log('handleSubmit', search)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="search"
                            value={ search }
                            onChange={ handleInputChange }
                            autoComplete="off"
                            className="form-control"
                            placeholder="Find your hero"
                        />
                        <button type="submit" className="btn btn-block mt-1 btn-outline-primary">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr/>

                    {
                        ( q === '')
                        && <div className="alert alert-info">Search a hero</div>
                    }

                    {
                        ( q !== '' && heroesFiltrados.length === 0)
                        && <div className="alert alert-danger">There is no a hero { q }</div>
                    }

                    {
                        heroesFiltrados.map(heroe => (
                            <HeroeCard key={ heroe.id } { ...heroe } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
