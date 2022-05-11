// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

let input=[1,5,9]
function numMean(array){
    let total=array.reduce((a,b)=> a+b,0);
    return total/array.length;
}
console.log(numMean(input))

// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
// beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.

function findElement(num,target){
    return nums.indexOf(target)
} 
console.log(findElement([4,5,6,7,0,1,2],9));

// HARD: Create two buttons, one that when clicked turns the background of the body 
// red. The other, when clicked, turns the body's background color white. 
// Each of the background colors should be defined as class styles and when the 
// buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's 
// classList to ONLY include that className
// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be 
// located in a folder named hard_js. 

const btnR = document.getElementByID ('toRed');
const btnW = document.getElementByID ('toWhite');
const bod=document.getElementByID ('bod');

btnR.addEventListener('click',
function colorRed(){
    bod.style.backgroundColor='red';
});
btnW.addEventListener('click',
function colorRed(){
    bod.style.backgroundColor='white';
});

// *VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin.