function outer(){
    let name="outer";
    let str=inner();
    return str;
}
function inner(){
    let name="inner";
    return "hello";
}
console.log("Before outer");
console.log(outer());
console.log("After outer");