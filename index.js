const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let sum = 0;

    for (let i = 0; i < cartItemsPrices.length; i++)
    {
        sum += parseFloat(cartItemsPrices[i]);
    }

    if (parseFloat(sum.toFixed(2)) === WINNING_SUM) return true;

    return false;
}

module.exports = doesCartWinPrize;
