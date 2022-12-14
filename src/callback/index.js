function suma(num1, num2) {
    return num1 + num2; 
}

function calc(num, nume, callback) {
    return callback(num, nume);
};

console.log(calc(2, 2, suma));


//------------------

setTimeout(() => {
    console.log('Hola Js');
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar');

function execCallback(callback) {
    window.setTimeout(() => {
      callback();
    }, 2000);
  }