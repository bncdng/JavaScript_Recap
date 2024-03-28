function zipStrings(strA, strB) {
  let merged = ""; // Initialize empty string to store merged result
  let maxLength = Math.max(strA.length, strB.length); // determine length of longest string
  // iterate through characters with for loop
  for (let i = 0; i < maxLength; i++) {
    // put them in merged string
    if (i < strA.length) {
      merged += strA[i];
    }
    if (i < strB.length) {
      merged += strB[i];
    }
  }
  return merged; // return merged strings
}
