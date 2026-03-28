let array = [11,22,33,44,55];


//MAP
// const newArr=array.map((value,index,array)=>value**2);
// console.log(newArr);

// let NewArray=[];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     const num = element*element
//     NewArray.push(num);
// }
// console.log(NewArray)

//FOREACH
// array.forEach((value,index,array)=>{
//     console.log(value);
// })


//FILTER
// let newArr = array.filter(value=>value>22);
// console.log(newArr)


//REDUCE
// let sum = array.reduce((prev,num,index,arr)=> num+prev,100);//yeni sum baslangicini 100den goturur. Default => (prev,0)
// console.log(sum);


//EVERY (shert YALNIZ her element ucun odendiyinde true qaytarir)
// let newArr = array.every((value,index,arr)=> value>=11);
// console.log(newArr)


//SOME (eger elementlerden biri bele sherti odese true qaytarir)
// let arr = array.some((value,index,arr)=> value>45);
// console.log(arr);


//FIND
// let newArr = array.find((value)=>value>22);
// console.log(newArr);


//FINDINDEX
// let result = array.findIndex((value)=>value==33);
// console.log(result);

const users = [
    { id: 1, name: "Ali", age: 21, point: 88, address: "Baku" },
    { id: 2, name: "Leyla", age: 23, point: 92, address: "Ganja" },
    { id: 3, name: "Murad", age: 20, point: 76, address: "Sumqayit" },
    { id: 4, name: "Aysel", age: 24, point: 95, address: "Shaki" },
    { id: 5, name: "Rauf", age: 22, point: 81, address: "Mingachevir" },
    { id: 6, name: "Nigar", age: 25, point: 89, address: "Lankaran" },
    { id: 7, name: "Tural", age: 19, point: 73, address: "Nakhchivan" },
    { id: 8, name: "Zahra", age: 26, point: 97, address: "Shirvan" },
    { id: 9, name: "Orxan", age: 23, point: 84, address: "Quba" },
    { id: 10, name: "Fidan", age: 22, point: 90, address: "Khachmaz" }
];

// let result = users.filter((value)=>value.point>87);

let sumOfAge = users.filter((value)=>value.point>87).reduce((prev,next)=>next.age+prev,0);
console.log(sumOfAge);
