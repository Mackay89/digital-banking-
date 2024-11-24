// price-stabilization.js
/**
 * Adjusts token supply to stabilize its price.
 * @param {number} currentPrice - The current market price of the token.
 * @param {number} targetPrice - The desired stable price.
 * @returns {number} - The adjustment in supply required.
 */
function adjustTokenSupply(currentPrice, targetPrice) {
    if (currentPrice > targetPrice) {
        return -(currentPrice - targetPrice) / targetPrice * 100;
    } else {
        return (targetPrice - currentPrice) / targetPrice * 100;
    }
}

module.exports = { adjustTokenSupply };

