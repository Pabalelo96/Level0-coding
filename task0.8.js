function convertTime(num){
    let hours = Math.floor(num/60);
    let minutes= num%60;
    return hours + ":" + minutes;
    
}

console.log(convertTime(80));
    