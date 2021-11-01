#JavaScript
var searchRange = function (nums, target) {
    return [findFirstOccurrence(nums, target), findLastOccurrence(nums, target)];
};
 const findFirstOccurrence = (nums,target) =>{
     
     let firstOccurrence = -1;
     
     let left  =  0;
     let right =  nums.length -1;
     
     while (left <= right) {
        
         let middle = left + right-left//2;
         
         if(target == nums[middle])
         {
             firstOccurrence = middle;
             right = middle - 1;// make sure if there another apparance of target before the middle 
         }
       
         else if (target < nums[middle]){
                right = middle - 1;// the first apparance is in the left half of the array [left,middle-1]
         }
         else left = middle + 1;   // the first apparance is in the right half of the array [middle+1 , right]      
         
     }
     
     return firstOccurrence;
 }
 
  const findLastOccurrence = (nums,target) =>{
     
     let lastOccurrence = -1;
     
     let left  =  0;
     let right =  nums.length -1;
     
     while (left <= right) {
        
         let middle = left + right-left//2;
         
         if(target == nums[middle]) {
             lastOccurrence = middle;
             left = middle + 1; // make sure if there another apparance of target after the middle 
         }
         else if (target < nums[middle]){
                right = middle - 1;}
         
         else left = middle + 1;          
         
     }
     
     return lastOccurrence;
 }
___________________________________________________________________________________________________________
#Java
