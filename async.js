setTimeout(myFunction, 3000);

function myFunction() {
    console.log("I Love You !!");
}


//myFunction is used as a callback

setTimeout(function () { myFunction1("I love You!!!"); }, 3000);

function myFunction1(value) {
    console.log(value);
}