// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.


const Calculator = (operator,B,C) => 
{
	switch(operator){
	  case '+':
	     return (B+C)
	   break;
	   case '-':
	     return (B-C)
	     break;
	   case '*':
	      return (B*C)
	      break;
	   case '/':
	      return (B/C)
	      break;
	    default:
	      return ('No operator')
	      break;
	}
};
let Numbers = Calculator('+',1,2);
console.log(Numbers);
