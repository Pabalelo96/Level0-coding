let str1 = "Manipulation";
let str2 = "Maltiplication";

function commonCharacters (string1, string2) {
   
  let duplicates = "";
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicates.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicates += string1[i];
      }
    }
  }
  return duplicates;
};

console.log(`common charecters :${commonCharacters(str1, str2)}`);