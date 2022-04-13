const test = require('./flay.js')


const invalidInput1 = test(undefined)
if (invalidInput1 !== 'Your input is undefined.') {
    throw new Error('Flay is not recognizing undefined inputs')
}

const invalidInput2 = test(46345)
if (invalidInput2 !== 'Your input is not a string.') {
    throw new Error('Flay is not recognizing non string inputs')
}

const invalidInput3 = test('')
if (invalidInput3 !== 'Your input is empty.') {
    throw new Error('Flay is not recognizing empty inputs')
}
