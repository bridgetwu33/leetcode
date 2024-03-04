/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens = tokens.sort((a, b) => {return a - b});
    let score = 0;

    let i = 0, j = tokens.length - 1;
    while(i <= j) {
        // if we have enough power, play face up
        if(power >= tokens[i]) {
            faceup(tokens[i]);
        }
        // else check if face down will give us enough power
        else if(score && power + tokens[j] >= tokens[i]) {
            facedown(tokens[j]);
            j--;
            faceup(tokens[i])
        }
        
        i++;
    }

    // when we play face up, we want to lose min amount of power
    function faceup(tokensi) {
        power -= tokensi;
        score++;
    }

    // when we play face down, we want to gain max amount of power
    function facedown(tokensi) {
        power += tokensi;
        score--;
    }

    return score;
};