'use strict';

class A {}

class B extends A {
  constructor() {
    var a;
    return a = super(), a;
  }

  // works:
  //
  // constructor() {
  //   var a = super();
  //   return a;
  // }
}
new B();
