// reverse a string and return an array
// eg digitize(1234) => [4,3,2,1]
function digitize(n) {
    var x = n.toString().split('').reverse()
      //console.log(x);
      for(var i = 0; i < x.length; i++){
       x[i] = parseInt(x[i]);
       //return x
   }
    console.log(x);
      return x 
  }
  digitize(12345)
