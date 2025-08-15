// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let num = [2, 7, 11, 15];
let target = 9;
let val;

for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num.length; j++) {
    if (num[i] === num[j]) {
      continue;
    } else if (num[i] + num[j] === target) {
      console.log('Target found by summing ' + i + ' + ' + j);
    } else {
      val = 0;
    }
  }
}

if (val === 0) {
  console.log('Value not found! ');
}
