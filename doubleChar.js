/**
 Given a string, you have to return a string in which each character (case-sensitive)
 is repeated once.


doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck! */
function doubleChar(str) {
    for(var i = 0;i < str.length;i++){// Your code here
        str[i] = str[i][i]
      }
      console.log(str);
      return str
    }
  doubleChar('1234!_')