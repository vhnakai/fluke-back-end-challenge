const matrix = [1, 1, 3, 2, 2, 4, 4, 5, 7, 7];

//return a true if it is a odd number
function isOdd(value) { return (value & 1); }

//Map to create a new Array with only Repeted numbers
const RepeatNumber = matrix.map((item, i) => matrix.includes(item, i + 1) ? item : '').filter(n => n);
0
//filter out the repeated elements, keeping only the ones
const Arr = matrix.filter((element, index, arr) => {
    if (RepeatNumber.indexOf(element) == -1) { return element; }
});

//maps the array looking for only the element that are odd
const fundAnOddNumber = Arr.map(item => isOdd(item) ? item : '').filter(n => n);

describe('Verify Returning Values', () => {

    it('isOld return a boolean?', () => {
        expect(isOdd(3)).toBeTruthy();
        expect(isOdd(4)).toBeFalsy();
    });

    it('RepeatNumber is Array contain only expected numbers?', () => {
        const expected = [1, 2, 4];
        expect(RepeatNumber).toEqual(
            expect.arrayContaining(expected),
        );
    });

    it('Arr is Array contain expected numbers?', () => {
        const expected = [3];
        expect(Arr).toEqual(
            expect.arrayContaining(expected),
        );
    });

    it('fundAnOddNumber is Array contain only don´t repeted odd numbers ?', () => {
        const expected = [3, 5];
        expect(Arr).toEqual(expected);
    });
});



