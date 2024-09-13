function removeduplicate(str){
    let result='';

    for( i = 0; i < str.length; i++){

        let isduplicate = false ;

        for(j = 0; j < str.length; j++){
            if( i !== j &&  str[i]  == str[j]){
                isduplicate = true;
                break;
                
            } 
        }
        if(!isduplicate){
            result += str[i];
        }
    }
    return result;
}

console.log(removeduplicate('programming'));
console.log(removeduplicate('hello world'));
console.log(removeduplicate('aaaaa'));
console.log(removeduplicate('abcd'));
console.log(removeduplicate('aabbcc'));
     