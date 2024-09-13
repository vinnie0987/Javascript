function isPalidrome(str){

    let str1 = str.toLowerCase().replace(/[^a-z0-9]/g,''); 

    let word1= str1.split('').reverse().join('');
    if (word1 === str1){
        return true
    } else{
        return false
    }

}

console.log(isPalidrome('a man, a plan, a canal,panama'));
console.log(isPalidrome('Was it a car or a cat i saw'));
console.log(isPalidrome('Hello,world'));
//console.log(isPalidrome(`mum`));