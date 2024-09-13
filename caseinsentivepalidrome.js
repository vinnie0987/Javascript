function caseInsensitivePalidrome(str){

    let str1 = str.toLowerCase().replace(/[^a-z0-9]/g,''); 

    let word1= str1.split('').reverse().join('');
    if (word1 === str1){
        return true
    } else{
        return false
    }

}

console.log(caseInsensitivePalidrome('Aba'));
console.log(caseInsensitivePalidrome('Racecar'));
console.log(caseInsensitivePalidrome('Palidrome'));
console.log(caseInsensitivePalidrome('Madam'));
console.log(caseInsensitivePalidrome('Hello'));