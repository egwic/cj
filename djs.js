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