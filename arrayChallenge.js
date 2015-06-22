var array = [];
var numberOfNumbers = 20;
var isDivisible5 = 0;
var counter = 0;

for (var i = 0; i < numberOfNumbers; i++) {
    array[i] = Math.floor(Math.random() * 1000);
}
console.log(array);
console.log("===================");
console.log("Num Divisible by 5");
console.log("===================");

for (var i = 0; i < numberOfNumbers; i++) {
    if ((array[i] % 5) == 0) {
        isDivisible5 += array[i];
        console.log(array[i]);
        counter++;
    }
}
console.log("========");
console.log("Average");
console.log("========");
console.log(isDivisible5 / counter);
