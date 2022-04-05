

//1. Print 1 - 135
//pseudocode
//1-write a loop and set the value from 1 to 136
//2-Each time it prints the number inside i
//3-The result shows the numbers 1 to 135





for (let i = 1; i <136; i++){
    console.log(i)
}
//Diagram 
//1: i = 1 ... i<136 .... result =1 
//1: i = 2 ... i<136 .... result =2
// ........
//1: i = 135 ... i<136 .... result =135

//2. Print Odd Numbers 1 - 135
//pseudocode
//1-write a loop and set the value from 1 to 136
//2-Inside the loop, use Statement if
//3-The result shows odd numbers between 1 and 136
for (let i = 0; i <136; i++){
    if ((i %2)===1) {
        console.log(i)
    }
}
//Diagram 
//1: i = 1 ... i<136 .... result =1 
//1: i = 2 ... i<136 .... result =
//1: i = 3 ... i<136 .... result =3
// ........
//1: i = 135 ... i<136 .... result =135

//3. Sum of Printed Numbers
//pseudocode
//1-write a loop and set the value from 1 to 135
//3-The result shows number is: i sum: i between 1 and 135
for(i =0; i <= 135; i++){
  
    console.log('Number is:' + i + " sum " +i);
  }
//Diagram 
//1: i= 0 ....result ...Number is:0 sum 0
//1: i= 1 ....result ...Number is:1 sum 1
//......
//1: i= 135 ....result ...Number is:135 sum 135

//4. Print the elements of an array
//pseudocode
//Make a verbal and put the numbers in it
//I use the loop
//The result shows the numbers inside the verbil

var x = [1, 4, 2, 12];
for (let i = 0; i <= x.length-1; i++){
    console.log(x[i])
  }
  //Diagram 
  //1: i= 0 ....result ...1
  //1: i= 1 ....result ...4
  //1: i= 2 ....result ...2
  //1: i= 3 ....result ...12

  //5. Find Max
  
  let max=null;
 const X = [1,5,-6,19,2,0]
for (let i = 0; i < X.length; i++){
    if(X[i]>max){
        max=X[i]
    }
}
console.log("max= "+max)

//6. Get Average
const y = [2, 12, 10];

let sum = 0;
let total;
for (let i = 0; i < y.length; i++){
  sum += y[i];
  total = sum / y.length;
}
console.log(total)

//7. Eliminate the Negatives
//pseudocode
//1- write a function that an arry of an argment
//2-create result variable to store the last result and it is empyy array
//3- loop through tis array
//4- if the number is < than 0 than with the 0 and push inside the result variable
//5- print the result variable
function numberToNull(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++){
        if( arr[i] < 0 ){
          arr[i]=0
        }
      }
      console.log(arr)
}
var x= [2, -1, 4, -3];
numberToNull(x)
//Diagram 
//1: i =0 ...2>0 ...result[2]
//2: i =1 ...-1<0 ...result[2,0]
//2: i =3 ...4>0 ...result[2,0,4]
//2: i =4 ...-3<0 ...result[2,0,4,0]

//8. Number to String
//pseudocode
//1- write a function that an arry of an argment
//2-create result variable to store the last result and it is empyy array
//3- loop through tis array
//4- if the number is < than 0 than with the world Turing and push inside the result variable
//5- print the result variable

function numberToString(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++){
        if( arr[i] < 0 ){
          arr[i]='Truing'
        }
      }
      console.log(arr)
}
var x= [1, -4, 0, -1];
numberToString(x)
//Diagram 
//1: i =0 ...1>0 ...result[1]
//2: i =1 ...-4<0 ...result[1,Turing]
//2: i =3 ...0=0 ...result[1,Turing,0]
//2: i =4 ...-1<0 ...result[1,Turing,0,Truing]