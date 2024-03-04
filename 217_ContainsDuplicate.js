/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();

    for(let elem of nums) {
        if(map.get(elem) !== undefined) return true;
        map.set(elem, 1)
    }

    return false;
};