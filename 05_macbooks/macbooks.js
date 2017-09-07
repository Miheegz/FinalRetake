<<<<<<< HEAD
var Laptop = function (year, hd) {
  this.year = year;
  this.hd = hd;
};
=======

function Laptop(year,size){
  this.year=year;
  this.hd=size;
  /* You should never declare prototype functions in the constructor. Always do it outside the constructor. */
  Laptop.prototype.checkSpecs= function(){
    return "Year: "+this.year+", HD: "+this.hd;
  }
>>>>>>> 279d5812a468b57265ea1d99b53d46fb3a72974b

Laptop.prototype.checkSpecs = function () {
  return 'Year: ' + this.year + ', HD: ' + this.hd;
};

<<<<<<< HEAD
var Macbook = function (year, hd, color) {
  Laptop.apply(this, [year, hd]);
  this.color = color;
};

var extendWithObjectCreate = function (child, parent) {
  child.prototype = Object.create(parent.prototype);
};

var extendWithNewKeyword = function (child, parent) {
  child.prototype = new parent();
};
=======
/* You are close here. But, color isn't the first argument passed to Macbook, it's actually the last,
 * so, when you do Macbook.color, you are assigning color to a number */
function Macbook(color){
  Laptop.apply(this, arguments); // this looks good.
  Macbook.prototype = new Laptop(); // don't overwrite the prototype in the constructor

  Macbook.color = color; // This will create a property on the constructor function, not on the instance.
}

/* Here, you have named the function parameters Macbook and Laptop. I wouldn't recommend that because
 * it can cause confusion and because inside the function, you aren't able to access the real constructors
 * Macbook and Laptop because your variable names shadow them. */
function extendWithObjectCreate(Macbook, Laptop){
	/* Though this gets the tests to pass, it wasn't the intention of this spec.
	 * What you want is for Macbook's prototype to have Laptop's prototype on its
	 * prototype chain. Instead, you said instances of Macbook will have Laptop as their constructor
	 * and then you returned an object that has Macbook.prototype on its prototype chain. */
  Macbook.prototype.constructor = Laptop;
   return Object.create(Macbook.prototype);

}

function extendWithNewKeyword(Macbook,Laptop){
	/* This should be the same as the last. You should set Macbook's prototype equal to a new instance
	 * of Laptop. */
  Laptop.apply(this,arguments);
  return new Macbook
}
>>>>>>> 279d5812a468b57265ea1d99b53d46fb3a72974b
