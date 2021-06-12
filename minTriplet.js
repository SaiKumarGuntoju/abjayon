let arr1 = [15,12,18,9]
let arr2 = [10,17,13,8]
let arr3 = [14,16,11,5]
//let arr1 = [5,2,8]
//let arr2 = [10,7,12]
//let arr3 = [9,14,6]
possible_list = []
maximum = 0
for (let a of arr1){
    for (let b of arr2){
        for (let c of arr3){
            list_a = [a,b,c]
            possible_list.push(list_a)
            maxVal = Math.max(...list_a)
            minVal = Math.min(...list_a)
            min_triplet = maxVal - minVal
            if (maximum < min_triplet){
                maximum = min_triplet
            }
        }
    }
}
min_list = []
mininum_triplet_value = maximum
possible_list.map((row) => {
    maxVal = Math.max(...row)
    minVal = Math.min(...row)
    min_triplet = maxVal - minVal
    if (min_triplet < mininum_triplet_value){
        mininum_triplet_value = min_triplet
    }
})
let sum_list = []
possible_list.map((row) => {
    maxVal = Math.max(...row)
    minVal = Math.min(...row)
    min_triplet = maxVal - minVal
    if (mininum_triplet_value === min_triplet){
        min_list.push(row)
        row_sum = row.reduce((acc,curr)=> acc + curr)
        sum_list.push(row_sum)
    }
})
let final_min_val = sum_list.indexOf(Math.min(...sum_list))
final_triplet = (min_list[final_min_val])
console.log(final_triplet.reverse())