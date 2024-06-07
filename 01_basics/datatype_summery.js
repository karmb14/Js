/*
Primitive
7 types:string,null,undefined,number,boolean,symbol,bigint


Non Primitive(reference type)
array,objects,functions
*/
const heros=['Spiderman','batman']//datatype==object

const myObj={
    name:'karm',
    age:19
}//datatype==object

const myFunc=function(){
    console.log("Hello Karm")
}//datatype==function


console.log(typeof myFunc)
console.log(typeof heros)
console.log(typeof myObj)