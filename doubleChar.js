/**
 Given a string, you have to return a string in which each character (case-sensitive)
 is repeated once.


doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck! */
function doubleChar(str) {
  var x = str.toString().split('')
    for(var i = 0;i < x.length;i++){// Your code here
      // x[i] = parseInt(x[i]);
      //console.log(x);
        x[i] += x[i];
        //console.log(x); 
        var y = x.join('');
      }
      console.log(y);
      //return x
    }
  doubleChar('1234!_')