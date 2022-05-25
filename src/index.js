// const name = "Mike";
// const age = 28;
// const massage1 = "私の名前は" + name + "です" + age + "です";

// console.log(massage1);

// const message2 = `私の名前は${name}です。年齢は${age}`;
// console.log(message2);

const nameArr = ["田中", "山田", "アホ"];

// for(let i=0;i<nameArr.length;i++ ){
//   console.log(nameArr[i])
// }

const Arr2 = nameArr.map((name) => {
  return name + "j";
});

// console.log(Arr2)

nameArr.map((name, i) => {
  console.log(`${i}番目は${name}`);
});

const numArr = [1, 2, 3, 4];

const newnumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newnumArr);

const Arr3 = nameArr.map((name) => {
  if (name === "アホ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(Arr3);
