// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.


const Triangle_Check = (A,B,C) => {

    if( A < 90 && B < 90 && C < 90){
     return 'acute'
    }
     else{
     return 'obtuse'
     }
   };

let Numbers = Triangle_Check(60,100,20);
console.log(Numbers); 