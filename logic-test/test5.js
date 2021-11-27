/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  var sortedArr = words.sort((a,b) => a.length - b.length)
    var shortest =  sortedArr[0]
    while(!words.every((string) => string.startsWith(shortest))){
        if(shortest.length === 0) return;
        shortest = shortest.slice(0,-1);
    }
    return shortest
}

console.log(result(words));
