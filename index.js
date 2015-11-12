'use strict';

class A {}

class B extends A {
  constructor() {
    return super();
  }

  // works:
  //
  // constructor() {
  //   var a = super();
  //   return a;
  // }
}
new B();
