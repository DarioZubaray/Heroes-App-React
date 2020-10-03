import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        email : '',
        password: '',
        logged: false
    }
    const [ values, handleInputChange, reset ] = useForm( initialState )

    const { email, password } = values
    const handleSubmit= (e) => {
        e.preventDefault()

        if ( email === '' || password === '') {
            return
        }

        dispatch({
            type: types.login,
            payload: {
                email,
                password
            }
        })
        reset()
        history.replace('/')
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card bg-transparent">
                        <div className="card-title">
                            <h3 className="text-center mt-3">Login Screen</h3>
                            <hr/>
                        </div>

                        <div className="card-body">
                            <form onSubmit={ handleSubmit }>
                                <div className="form-group">
                                    <label htmlFor="email">Email address:</label>
                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={ email }
                                        onChange={ handleInputChange }
                                        className="form-control"
                                        placeholder="Enter email"
                                        autoComplete="off"
                                        />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input
                                        name="password"
                                        id="password"
                                        type="password"
                                        value={ password }
                                        onChange={ handleInputChange }
                                        className="form-control"
                                        placeholder="Enter password"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" /> Remember me
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
