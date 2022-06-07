// You are given 
// 3
//  distinct integers 
// X
// ,
// Y
// ,
//  and 
// Z
// ,
//  and your task is to find and return the second smallest integer among the three provided integers.


const findSndSmallest = (x,y,z) => {
    if((x<y&&y<z)||(z<y&&y<x)){
       return y
     }

     else if((y<x&&x<z)||(z<x&&x<y)){
       return x
     }

     else{
       return z
     }

 };

let Numbers = findSndSmallest(2,9,23);
console.log(Numbers); 