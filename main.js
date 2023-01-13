// function Plane(arr) {
//     let dp = new Array(arr.length).fill(Infinity);
//     dp[0] = 0;
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] >= i - j) {
//                 dp[i] = Math.min(dp[i], dp[j] + 1);
//             }
//         }
//     }
//     return dp[arr.length - 1] === Infinity ? -1 : dp[arr.length - 1];
// }

// let arr = [2, 1, 2, 3, 1];
// console.log(Plane(arr))

//1. First, it initializes an array dp of length n with all elements set to Infinity.
// 2.Next, the code sets the number of planes required to reach the first airport, dp[0], as 0, since you start at the first airport.
// 3.The outer loop iterates through the airports from 1 to n-1.
// 4.Inside the outer loop, the inner loop iterates through all previous airports.
// 5.For each previous airport j, the code checks if there is enough fuel in the previous airport to reach the current airport i. If yes, it updates dp[i] with the minimum number of planes required to reach airport i.
// 6.Finally, the code checks if the last element of the dp array is set to Infinity, which means it's not possible to reach the last airport, it returns -1 else it return the last element of the dp array which represents the minimum number of planes required to reach the last airport.




