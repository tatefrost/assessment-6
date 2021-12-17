const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array of same length', () => {
        expect(shuffleArray([1, 2, 3, 4, 5]).length).toEqual(5)
    })

    test('return an array which is shuffled', () => {
        expect(shuffleArray([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5])
    })
})