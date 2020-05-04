const{stringCalc} = require('../stringcalc');

describe("stringCalc", () =>{
    [
        { input: '', output: 0 },
        { input: '1', output: 1 },
        { input: '1,2', output: 3 },
        { input: '1,2,3', output: 6},
        { input: '1,2,3,4', output: 10}
    ].forEach(({input, output}) => {
        it(`should return ${output} on input "${input}"`, () => {
            expect(stringCalc(input)).toEqual(output)
        })
    })

});