const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen.toFixed(2);
}
const fromYenToPound = function (valueInEur) {
    let valueInPound = 1 / ((valueInEur / 0.87) * 156.5);
    return valueInPound.toFixed(3);

}

module.exports = { fromEuroToDollar, fromDollarToYen , fromYenToPound};