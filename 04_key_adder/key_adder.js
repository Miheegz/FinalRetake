/* You are very close here, but there are some minor issues. */
function keyAdder(obj){
  var sum=0;
<<<<<<< HEAD
  var obj=this;

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
        sum += obj[key];
=======
  /* If you look at the test specs, you will notice that obj isn't passed in as a parameter.
   * They are doing keyAdder.call(obj). That means that obj will be available as 'this' inside
   * the function, not as a parameter. */
  for (var key in obj){
	  /* Your logic here is backwards. You are saying if obj[key] isn't a number, then try to add it. */
    if (typeof(obj[key])!='number' && obj.hasOwnProperty(key)){
      sum += obj[key];
>>>>>>> 279d5812a468b57265ea1d99b53d46fb3a72974b
    }
}
  return sum;
}
