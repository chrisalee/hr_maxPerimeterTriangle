/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    let sticksThatCanFormTriangle = [];
    let stickPile = sticks.sort((a, b) => b - a);

    for (let i = 0; i < stickPile.length - 2; i++) {
        if (stickPile[i] < stickPile[i + 1] + stickPile[i + 2]) {
                sticksThatCanFormTriangle.push([stickPile[i + 2], stickPile[i + 1], stickPile[i]]);
            }
    }   
    return sticksThatCanFormTriangle.length > 0 ? sticksThatCanFormTriangle[0] : [-1];
}
