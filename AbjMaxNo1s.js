let given_array = [[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]];
let count_array = []
count_array = given_array.map((row) => {
    count = 0
    for (let each_num of row){
        if (each_num === 1 ){
            count = count + 1
        }
    }
    return count
    //console.log(count);
});
k = (Math.max(...count_array))
console.log(count_array.indexOf(k))