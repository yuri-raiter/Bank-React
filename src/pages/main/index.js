import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import './styles.css'


const Login = () => { // stateless component

    const history = useHistory()

    const { register, handleSubmit } = useForm()

    const onSubmit = data => { // data returns an object with the inputted values
        return history.push(`/users/${data.name}`)
    }

    return (
        <div className='container'>
            <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Enter your name</h1>
                <input type="text" placeholder="Name" name="name" autoComplete="off" ref={register}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login