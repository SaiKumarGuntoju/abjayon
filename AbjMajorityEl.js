function frequencyCheck(unique_list,array,n){
    dict_list = {}
    unique_list.map((num) => {
        let count = 0
        array.map((digit) => {
            if (num === digit) {
                count = count + 1
            }else{
                count = count
            }
        });
        dict_list[count] = num
    });
    keys = Object.keys(dict_list)
    freq = (Math.max(...keys))
    if (freq > n/2){
        result = dict_list[freq]
    }else{
        result = "No Majority Element"
    }
    return result
}

let array = "3,3,4,2,4,4,2,4,4" ;
array = array.split(",");
n = array.length;
unique_list = []
array.map((num) => {
    if (unique_list.includes(num)){
        unique_list = unique_list
    }else{
        unique_list.push(num)
    }
})
console.log(frequencyCheck(unique_list,array,n))