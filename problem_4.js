// find the largest number of an array


const arr = [4,6,3,7,1,34,99,107,800] 
let len = arr.length 

//casual way of solving this problem
function largeNum(arr){
  
  let large = arr[0]
      for(let i = 0 ; i<len ; i++ ){
      if (arr[i] <= arr[i+1]){
        large = arr[i+1]
  }
}
return large

}

//Troll way of solving this problem
function largeNum2(arr){
   const sortedArr = [...arr].sort((a, b) => a - b);
   large = sortedArr[sortedArr.length-1]
   return large
   
}


console.log("Normal Way : "+largeNum(arr))
console.log("Troll Way : "+largeNum2(arr))
