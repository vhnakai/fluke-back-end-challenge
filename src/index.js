const matrix = [1,1,3,3,2];

//return a true if it is a odd number
function isOdd( value ){ return (value & 1); } 

//Map to create a new Array with only Repeted numbers
const RepeatNumber = matrix.map((item, i) => matrix.includes(item, i+1) ? item: '').filter(n => n); 

//filter out the repeated elements, keeping only the ones
const Arr = matrix.filter( (element, index, arr ) => {
        if(RepeatNumber.indexOf(element) == -1 ){ return element;}
});

//maps the array looking for only the element that are odd
const fundAnOddNumber = Arr.map(item => isOdd(item) ? item : '').filter(n => n);

console.log(fundAnOddNumber);

