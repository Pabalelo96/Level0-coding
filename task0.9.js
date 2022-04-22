
function vowelsPrint(string){
    
    const vowels=[ "a","e","i","o","u","A","E","I","O","U"]
    for (let i=0; i<string.length;i++)

    if(vowels.includes(string[i])) {
        console.log(string[i])
    }
    
}

vowelsPrint("umuzi")