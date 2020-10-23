const assert = require('chai').assert

const getUser = require('../../services/api').getUser
const updateBalance = require('../../services/api').updateBalance

describe('api.js test', () => {

    const name = 'Yuri Nicolas Raiter'
    
    describe('getUser()', () => {

        it('should return an object', async () => {      
            
            const obj = await getUser(name)
    
            assert.isObject(obj)

        }).timeout(10000)
    })

    describe('updateBalance()', () => {

        it('should update the balance', async () => {
            
            const value = 6000
            
            await updateBalance(name, value)

            const user = await getUser(name)

            const updatedBalance = user.balance

            assert.equal(updatedBalance, value)

        }).timeout(10000)
    })
})