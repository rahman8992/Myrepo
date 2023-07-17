// console.log("welcome to javascript");

// // if (true) {
// //   let a = 5;
// //   console.log(a);
// // }

function joke() {
  console.log("kkkkkkkkkk");
}

console.log("howllo rr uuu");
// // // console.log(a);

// // let jokejs = "one";
// // console.log(jokejs);

// // // dynamic typing changing value

// // jokejs = 7;
// // console.log(jokejs);

// // let namew = [1, 9, 6, 4, 2];
// // namew[5] = 98;
// // namew[6] = 100;
// // console.log(namew[6]);

// // // ternary

// // let age = 10;

// // let status1 = age > 18 ? "you are allowed to vote" : "you cant wote ";
// // console.log(status1);

// // // if else ifelse

// // let marks = 90;

// // if (marks >= 90) {
// //   console.log("you got A grade");
// // } else if (marks >= 85) {
// //   console.log("you got B grade");
// // } else if (marks >= 70) {
// //   console.log("you got C grade");
// // } else {
// //   console.log("you got D grade");
// // }

// // // swtich cases

// // let marks2 = 2;
// // switch (marks2) {
// //   case 1:
// //     console.log("you got A grade");
// //     break;
// //   case 2:
// //     console.log("you got b grade");
// //     break;
// //   case 3:
// //     console.log("you got c grade");
// //     break;

// //   default:
// //     console.log("you got D grade");
// // }

// // for (let i = 1; i <= 5; i++) {
// //   console.log("we are dev" + i);
// // }

// // let j = 0;
// // while (j < 5) {
// //   console.log("hii " + j);
// //   j++;
// // }

// // let k = 0;
// // do {
// //   console.log(k);
// //   k++;
// // } while (k < 5);

// // print elements of an array in reverse order
// // let arr = [10, 20, 30, 40, 50];

// // let xi = arr.reduce((acc, nextnm) => acc + nextnm);

// // console.log(xi);

// // for (let i = arr.length - 1; i >= 0; i--) {
// //   console.log(arr[i]);
// // }

// // for (let ij = 5; ij > 0; ij--) {
// //   console.log("backtrack -- " + ij);
// // }

// // let ki = 20;

// // while (ki > 10) {
// //   console.log("ki print---" + ki);
// //   if (k === 16) {
// //     break;
// //   }
// //   ki--;
// // }

// // // // // // // //        object in js  // // // // // // // //

// // let rectangle2 = {
// //   length: 2,
// //   breadth: 6,
// //   draw: function () {
// //     console.log("how are you");
// //   },
// // };

// // console.log(rectangle2.draw);
// // console.log(rectangle2.length);

// // // Function creating new objects
// // // without use of 'new' keyword
// // function createRobot(name) {
// //   return {
// //     name: name,
// //     talk: function () {
// //       console.log("My name is " + name + ", the robot.");
// //     },
// //   };
// // }

// // //Create a robot with name Chitti
// // const robo1 = createRobot("Chitti");

// // robo1.talk();

// // // Create a robot with name Chitti 2.O Upgraded
// // const robo2 = createRobot("Chitti 2.O Upgraded");

// // robo2.talk();

// // function traingle(wid2, wid) {
// //   return (jj = {
// //     length: wid2,
// //     width: wid,
// //     draw: function () {
// //       console.log(wid2 + wid);
// //     },
// //   });
// // }

// // let obj9 = traingle(5, 2);
// // obj9.draw();

// // function Rectangle(lenn, wid) {
// //   this.length = lenn;
// //   this.widt = wid;
// // }

// // let ac = new Rectangle(2, 3);
// // console.log(ac.length);

// // ac.color = "green";
// // console.log(ac.color);
// // delete ac.widt;
// // console.log(ac);

// // let list = [4, 5, 6];

// // for (let i in list) {
// //   console.log(i); // "0", "1", "2",
// // }

// // for (let i of list) {
// //   console.log(i); // "4", "5", "6"
// // }

// // var onew = {
// //   name: "khan",
// //   age: 20,
// //   hobby: "fotbal olayer",
// // };

// // for (let key in onew) {
// //   console.log(`this is key ${key}, and this is value ${onew[key]}`);
// // }
// // for (let key of Object.entries(onew)) {
// //   console.log(key);
// // }

// // const originalObj = { name: "John", age: 30 };
// // const clonedObj = [...Object.entries.originalObj];

// // Alternatively, you can use the spread operator:
// // const clonedObj = { ...originalObj };

// // console.log(clonedObj); // { name: 'John', age: 30 }

// // originalObj.age = 40;
// // console.log(clonedObj); // { name: 'John', age: 40 }

// // string methods

// // var i = "rahman khan web dev";
// // console.log(i.split("a"));

// // // date time

// // var jokdate = new Date();

// // console.log(jokdate.getDate());
// // console.log(jokdate.getFullYear());
// // // console.log(jokdate.getMilliseconds());

// // // arrys

// // let arr = [1, 6, 3, 8, 9, 5, 2];

// // console.log(arr[2]);

// // arr.splice(1, 0, "a", "b", "c");

// // console.log(arr);

// // var fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // At position 2, add 2 elements, remove 1:
// // fruits.splice(2, 1, "Lemon", "Kiwi");

// // console.log(fruits);

// // let sem = [
// //   { roll: 15630, fname: "panda" },
// //   { roll: 15520, fname: "khan" },
// // ];

// // let searchname = sem.find((lname) => lname.fname === "panda");
// // console.log(searchname);

// // let art = [20, 30, 50, 6, 4, 5, 9, 7, 10];

// // let sortedarr = art.sort(function (a, b) {
// //   return a - b;
// // });

// // console.log(sortedarr);
// // console.log(art.slice(2, 5));
// // console.log(art.sort());

// // for (let i of art.sort()) {
// //   console.log(i);
// // }

// // const arry = [1, 2, 3, 4, 5];
// // for (let i = arry.length - 1; i >= 0; i--) {
// //   console.log(`our index ${i}  and array is goint to delete ${arry.pop()}`);
// // }

// // console.log(arry); // []

// // let ary = [1, 2, 3, 5];
// // const bary = 0;
// // while (bary < ary.length) {
// //   ary.pop();
// //   bary++;
// // }
// // console.log(ary);

// const array = [1, 2, 3, 4, 5];
// let index = 0;

// while (index < array.length) {
//   array.pop();
//   index++;
// }

// console.log(array); // []

// // console.log(arry);

// // for (let i in arry.length) {
// //   if (i < arry[i]) {
// //     console.log(i.pop());
// //   }
// // }

// // let fil = arry.filter(function (a) {
// //   return a > 22 && a != 100;
// // });

// // console.log(fil);

// let arrs = [2, 6, 9, 99, 55, 66, 156];

// for (let i = arrs.length - 1; i >= 0; i--) {
//   arrs.pop();
// }

// console.log(arrs);

function sum(a, k) {
  return a + k;
}

console.log(sum(8, 2));

let onjs = {
  fname: "panda",
  lname: "khan",
  get afnam() {
    return `${this.fname}  ${this.lname}`;
  },

  set fulNAme(values) {
    let parts = values.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
};
onjs.fulNAme = "kakaka lololo";
console.log(onjs.afnam);

let a = [5, 9, 6, 8, 6, 6];

let joketotal = a.reduce((an, b) => an + b);
console.log(joketotal);
let total = 0;
for (let b of a) {
  total = total + b;
}

console.log(total);
