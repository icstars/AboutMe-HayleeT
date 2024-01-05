// function twoSum(a,b){
//     for (let i = 0; i< a.length; i++){
//         for(let j = i + 1; j < a.length; j++){
//                 if(a[i] + a[j] ==b){
//                     return [a[i],a[j]];
//                 }
                
//         }
        
//     }
//     return ('No number equals the target')
// } 
// console.log(twoSum([12,67,23,8,10,21],30))


function twoSum(a, b) {
    let i = 0;
    let j = i + 1;
    while (i < a.length - 1) {
      if (j < a.length) {
        if (a[i] + a[j] == b) {
          return [a[i], a[j]];
        }
        j++;
      } else {
        i++;
        j = i + 1;
      }
    }
    return "No number equals the target";
  }

  console.log(twoSum([3, 6, -3, 4, 5, 8], 1));