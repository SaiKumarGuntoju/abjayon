function rotate(arr,d,n){
    arr = (arr.split(" "));
    let rotate = arr.slice(d,n) + arr.slice(0,d);
    let result = (rotate.split(","));
    result = result.join(" ");
    return result;
}

let arr = "1 2 3 4 5" ;
let d = 2;
let n = 5;
console.log(rotate(arr,d,n));