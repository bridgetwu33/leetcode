/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    
    for(const elem of strs) {
        const letters = elem.split("").sort().join("");
        if(map.get(letters) !== undefined) map.get(letters).push(elem);
        else map.set(letters, [elem])
    }

    return [...map.values()];
}