/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(const elem of nums) map.set(elem, map.get(elem) + 1 || 1);

    // we want to sort map by descending frequency, which are our values
    map = new Map([...map.entries()].sort((a, b) => {return b[1] - a[1]}))

    // we want to return elements, which are our keys
    return [...map.keys()].slice(0, k);
};