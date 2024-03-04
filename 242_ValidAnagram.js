/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const map = new Map();
    for(const char of s) map.set(char, map.get(char) + 1 || 1)
    for(const char of t) {
        if (map.get(char) === undefined) return false;
        map.set(char, map.get(char) - 1)
        if(map.get(char) < 0) return false;
    }
    return true;
};