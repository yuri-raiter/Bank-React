module.exports = function debitOrCredit(type, user_balance, value) {
    if (type === 'debit') {
        return parseFloat(user_balance) + parseFloat(value)
    }

    if (type === 'credit') {
        const result = parseFloat(user_balance) - parseFloat(value)
        
        if (result < 0) return 'credit not allowed'

        return result
    }
}
