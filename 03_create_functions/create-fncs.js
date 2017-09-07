<<<<<<< HEAD
function createFunctions(n) {
  var callbacks = [];

  var factory = function(x){
    return function(){
      return x;
    };
  };

  for (var i=0; i<n; i++) {
    callbacks.push(factory(i));
  }

  return callbacks;
=======
/* You are definitely on the right track here. */
function createFunctions(num) {
	var callbacks = [];
	for (var i = 0; i < num; i++) {
		function getIndex(indx) {
			/* You properly created this getIndex wrapper function, but then you are
			 * referencing i instead of indx which messes up everything. */
			callbacks[i] = function () {
				var index = i;
				return index;
			}
		}
		/* You are calling getIndex with the value callbacks[i], which
		 * will almost certainly be undefined because you haven't
		 * assigned it a value yet. */
		getIndex(callbacks[i])
	}
	return callbacks;
>>>>>>> 279d5812a468b57265ea1d99b53d46fb3a72974b
}
