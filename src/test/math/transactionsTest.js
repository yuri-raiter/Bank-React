const assert = require('chai').assert
const debitOrCredit = require('../../math/transactions')

describe('Debit', () => {
    it('debitOrCredit() should return 10', () => {
        assert.equal(debitOrCredit('debit', 5, 5), 10)
    })
})

describe('Credit', () => {
    it('debitOrCredit() should return 13', () => {
        assert.equal(debitOrCredit('credit', 20, 7), 13)
    })
})

describe('Credit', () => {
    it('debitOrCredit() should return "credit not allowed"', () => {
        assert.equal(debitOrCredit('credit', 5, 6), 'credit not allowed')
    })
})