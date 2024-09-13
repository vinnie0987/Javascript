function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

   
    let prefix = strs[0];

    
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
       
        prefix = prefix.substring(0, j);
        
        if (prefix === '') return '';
    }

    return prefix;
}

console.log(longestCommonPrefix(['flower','flow','flight'])); //,f1'
console.log(longestCommonPrefix(['dog','racecar','car'])); //''
console.log(longestCommonPrefix(['interspecies','finterstellar','interstate'])); //
console.log(longestCommonPrefix(['prefix','prefixes','perform'])); //'pre'
console.log(longestCommonPrefix(['apple','banana','cherry'])); //''