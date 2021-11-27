/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  const sorted = numbers.sort((a, b) => a - b)
  let first = sorted[0]
  let last = sorted[sorted.length - 1]
  const missing = []
  for(let i = first;i<= last;i++){
      if(!sorted.includes(i)){
          missing.push(i)
      }
  }
  return missing.toString()
}

console.log(result(numbers));
