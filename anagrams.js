
function areAnagrams(str1,str2){

   let sortedword1 = str1.toLowerCase().split('').sort().join('');
   let sortedword2 = str2.toLowerCase().split('').sort().join('');
   
   
   

   if(sortedword1 == sortedword2){
    return true;
   } else{
    return false;
   }

}

console.log(areAnagrams('Listen','silent'));
console.log(areAnagrams('hello','world'));





