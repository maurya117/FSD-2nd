//some()& every()

let marks=[80,90,70,60,50];

//some() checks wether at least one element stisfies the condition or not
let lowMarks=marks.some(mark=>mark<40);
console.log(lowMarks); 

let highMarks=marks.every(mark=>mark>40);
console.log(highMarks);
