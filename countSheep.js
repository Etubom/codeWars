//Return total number of 'true' in the array
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var count = 0;
  for(var i = 0; i < arrayOfSheep.length;i++){
    if(arrayOfSheep[i] === true)  
      count++;
      
  } 
    return count;
}
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

console.log(countSheeps(array1));







