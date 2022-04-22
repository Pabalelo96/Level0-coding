function celciousTofahreheit(celcius){

    let farhreheit= celcius*9/5 + 32;
    

    console.log(farhreheit);

}
celciousTofahreheit(38);

function farhreheitTocelcius(farhreheit){
    let celcius = (farhreheit-32)*5/9;
    console.log(celcius)
}
farhreheitTocelcius(100)