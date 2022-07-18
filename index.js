//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  let newStr = str.split(" ");
  // let newStrUpper = "";
  //write your code here
  for (let i = 0; i < newStr.length; i++) {
    // newStrUpper = newStr[i][0].toUpperCase();
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    // console.log(newStr[i]);
  }

  console.log(newStr.join(" "));
}

uppercase("the quick brown fox");

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here
  let newStr2 = str.split(" ");
  let largest = -Infinity;
  let index = -1;

  // console.log(newStr2);
  for (let i = 0; i < newStr2.length; i++) {
    if (newStr2[i].length > largest) {
      largest = newStr2[i].length;
      // console.log(newStr2[i]);
      index = i;
    }
    // console.log(newStr2[i].length);
  }
  // console.log("This is line 31", largest);
  console.log(newStr2[index]);
}

find_longest_word("Web Development Tutorial");
// console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here
  let largestCountry = -Infinity;
  let indexLargest = -1;

  for (let i = 0; i < country_name.length; i++) {
    if (country_name[i].length > largestCountry) {
      largestCountry = country_name[i].length;
      // console.log(newStr2[i]);
      indexLargest = i;
    }
  }

  return country_name[indexLargest];
  // console.log(country_name.);
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
