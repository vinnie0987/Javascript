function countDistinctPalindromes(s) {
    let count = 0;

    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    
    for (let i = 0; i < s.length; i++) {
        
        expandAroundCenter(i, i);
        
        expandAroundCenter(i, i + 1);
    }

    return count;
}

console.log(countDistinctPalindromes('ababa')); //7
console.log(countDistinctPalindromes('racecar'));//7
console.log(countDistinctPalindromes('aabb'));//4
console.log(countDistinctPalindromes('a'));//1
console.log(countDistinctPalindromes('abc'));//3

    