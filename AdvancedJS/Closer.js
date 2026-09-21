
//closures

function outer() {
     let counter = 0;
  function inner(){
    counter++;

    console.log(counter);
  }
  return inner();
}

let i = outer();
i(); // 1
i(); // 2
i(); // 3