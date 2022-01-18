function findShortestString(arr) {
  return arr.reduce((a,b) => a.length <= b.length ? a : b);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
//take in an array of strings
//find the shortest string with .reduce(previous value, current value), loop thru and compare
//if the length of the previous string is lessorequalto the current string, return previous string, otherwise return the current string 
//since the reduce() will return the shortest string, I need to return the function at the onset

// And a written explanation of your solution
//perform a reduce() method on the given array.  
//Compare the previous value with the current value. 
//If that remains true, return the first string.  
//Otherwise, return the current string because the length of it must be less by comparison.
