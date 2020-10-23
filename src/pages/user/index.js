import React, { Component } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import './styles.css'


const getUser = require('../../services/api').getUser
const updateBalance = require('../../services/api').updateBalance

const debitOrCredit = require('../../math/transactions')

export default class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            value: '',
            input_name: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        var { name } = this.props.match.params

        const obj = await getUser(name)

        this.setState({ user: obj })
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
        this.setState({ input_name: event.target.name })

        if (event.target.value < 0) toast.error('The value must be positive!')
    }

    async handleSubmit(event) {
        const { user, value, input_name } = this.state
         
        if (value < 0) return

        const result = debitOrCredit(input_name, user.balance, value)

        await updateBalance(user.name, result)
    }

    render() {

        const { user } = this.state

        return (
            <div className="container">
                <ToastContainer />
                <div className="account_info">
                    <div className="div1">
                        <div className="name">
                            <h2>{user.name}</h2>
                        </div>
                        <div className="others">
                            <p>RG: {user.rg}</p>
                            <p>CPF: {user.cpf}</p>
                            <p>Account: {user.account_number}</p>
                        </div>
                    </div>
                    <div className="div2">
                        <p>Balance</p>
                        <h2>{user.balance}</h2>
                    </div>
                </div>
                <div className="transactions">
                    <form className="debit-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Debit a value" name="debit" autoComplete="off" step="0.01" onChange={this.handleChange}/>
                        <input type="submit" value="Debit" />
                    </form>
                    <form className="credit-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Credit a value" name="credit" autoComplete="off" step="0.01" onChange={this.handleChange}/>
                        <input type="submit" value="Credit" />
                    </form>
                </div>
            </div>
        )
    }
}