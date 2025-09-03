//
// Start from chapter 1


let a = 1;
let b = 2;
console.log('a+b', a + b);

let val1 = 789;
let val2 = 3;
let val3 = 789 % 3;

//console.log( val1 / val2);
//console.log( val1 / val3);

//console.log("This is Tom's house.");
//console.log('This is Tom\'s house.');

let val4 = 5 + 6 -1;
let val5 = val4 * 2;
let val6 = val5 % 3;
let val7 = val6 ** 3;
//console.log(val4, val5, val6, val7);

let obj = {
  prop : true,
  subOnj : { val : 100 },
  greeting : function() {
    console.log('こんにちは。');
  },
};

//console.log('obj.prop', obj.prop);
//console.log('onj.subObj.val', obj.subOnj.val);
//console.log('obj.greeting', obj.greeting);
//console.log('obj.greeting', obj.greeting());

//console.log('obj.prop', obj['prop']);
//console.log('onj.subObj.val', obj['subOnj']['val']);
//
//console.log('obj.greeting', obj['greeting']);
//console.log('correct obj.greeting', obj['greeting']());

obj.subOnj.valval = 1000;
//console.log('new obj', obj);

let c = 0;
//console.log(Boolean(c));
let d = "";
//console.log(Boolean(d));
let e = null;
//console.log(Boolean(e));
let f = undefined;
//console.log(Boolean(f));

const TAX_RATE = 1.1;
let productPrice = 1000;

//console.log('商品の金額は'+productPrice+'円ですので、税込金額は'+productPrice*TAX_RATE+'円です。');
//console.log(`商品の金額は${productPrice}円ですので、税込金額は${productPrice*TAX_RATE}円です。`);

//console.log((12 ** 2) % 5);
//console.log((12n ** 2n) % 5n);
//
//console.log('NaN', 123/0);
// string => number -> NaN

const counter = { num: 1 };
counter.num = counter.num + 1;
//window.alert(counter.num);


//
// Finish to chapter 3

const person = {
  name : "Bob",
  age : 28,
  gender : "male"
}

if (person.gender === "male" && person.age >= 25) {
  console.log(`Bobは25歳以上の男性です。`);
}
else {
 console.log(`Bobは25歳以上の男性ではありません。`);
}

let val8 = "";
if ( ! val8) {
  val8 = "Hello";
}

let val9 = null;
if (val9 === null || val9 === undefined) {
  val9 = "Hello";
}

//console.log(val8, val9);

let animal = "Animal Name";
//animal = "Uma";
animal = "Zou";

switch (animal) {

  case "Zou" : console.log("Zou");

  case "Uma" : console.log("Uma");

  case "Usagi" : console.log("Usagi");

  break

  default : console.log("I don'know it's animal!");

}

// try {
//   let bbb = 10 + aaa;
//   console.log(bbb);
// } catch (e) {
//   console.error(e);
// } finally {
//   console.log("後続の処理");
// }

let greeting2 = 'こんにちは';

try {
  if (typeof greeting2 !== 'string') {
    throw new Error('不正なデータ型です！');
  }
    console.log(`${greeting2}、いい天気ですね！`);
} catch (e) {
    console.log(e);
  }

// let i = 0;
// while (i <= 6) {
//   //i +=2;
//   console.log(i);
//   i +=2;
// }

// for (let i = 0; i <= 9; i += 3) {
//   console.log(i);
// }

const arry = [ 10, 20, 23, 47 ];
// Try it


