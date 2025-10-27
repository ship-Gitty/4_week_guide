
function area(){
    const length = document.getElementById("length").value;
    const breadth = document.getElementById("breadth").value;
    const area = length * breadth;

     document.getElementById("result").innerHTML = 
        `Area of Rectangle = ${area} sq units`;

}

/* function temp(){
    const ftemp = document.getElementById("ftemp").value;
    const ttemp = document.getElementById("ttemp").value;
    const toCelcius = (5 / 9) * (fahrenheit - 32);
    const toFahrenheit =  (Celsius * 9/5) + 32;

     document.getElementById("finaltemp").innerHTML = `The temperature in celcius is = ${toCelcius} °C`; 
}
*/

function temp(){
    const fahrenheit = document.getElementById("temp").value;
    const toCelcius = (5 / 9) * (fahrenheit - 32);
    document.getElementById("fresult").innerHTML = `The temperature in Celcius is = ${toCelcius}  °C`;
}

function num(){
    let num = document.getElementById("num").value;
    if (num % 2 == 0 ) {
        document.getElementById("check").innerHTML = `The num ${num} is: even`;
    }
    else {
        document.getElementById("check").innerHTML = `The num ${num} is: odd`;

    }
    
}

function grade_check(){
    let num = document.getElementById("num").value;
}